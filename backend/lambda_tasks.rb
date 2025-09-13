# backend/lambda_tasks.rb
require "json"
require "uri"
require "mysql2"
require_relative "config/environment"

def respond(ok:, body:)
  { statusCode: ok ? 200 : 500, body: JSON.dump(body) }
end

def parse_db_url(url)
  uri = URI.parse(url)
  {
    host: uri.host, port: uri.port || 3306,
    username: URI.decode_www_form_component(uri.user || ""),
    password: URI.decode_www_form_component(uri.password || ""),
    database: (uri.path || "").sub(%r{^/}, ""),
    ssl_mode: URI.decode_www_form(uri.query.to_s).to_h["ssl_mode"],
    params: Hash[URI.decode_www_form(uri.query.to_s)]
  }
end

def diag_db!
  url = ENV["DATABASE_URL"].to_s
  info = parse_db_url(url)
  require "socket"
  Socket.tcp(info[:host], info[:port], connect_timeout: 5) { |s| s.close }

  opts = {
    host: info[:host], port: info[:port],
    username: info[:username], password: info[:password],
    database: info[:database],
    connect_timeout: (info[:params]["connect_timeout"] || 10).to_i,
    encoding: info[:params]["encoding"] || "utf8mb4",
    ssl_mode: info[:params]["ssl_mode"]&.downcase&.to_sym,
  }
  if (sslca = info[:params]["sslca"])
    opts[:sslca] = sslca
  end

  c = Mysql2::Client.new(**opts)
  ver = c.query("SELECT VERSION() AS v").first["v"]
  who = c.query("SELECT CURRENT_USER() AS u").first["u"]
  { ok: true, result: { server_version: ver, current_user: who, opts: opts.reject { |k,_| k == :password } } }
end

def handler(event:, context:)
  payload = event.is_a?(String) ? JSON.parse(event) : event
  task = payload["task"].to_s

  case task
  when "diag"
    begin
      res = diag_db!
      return respond(ok: true, body: res)
    rescue => e
      err = {
        class: e.class.name,
        message: e.message,
        cause: e.cause&.message,
        backtrace: e.backtrace&.take(10),
      }
      if e.respond_to?(:error_number)
        err[:mysql_error_number] = e.error_number
      end
      return respond(ok: false, body: { ok: false, error: err })
    end

  when "migrate"
    ActiveRecord::Base.connection_pool.with_connection { ActiveRecord::MigrationContext.new("db/migrate", ActiveRecord::SchemaMigration).migrate }
    respond(ok: true, body: { ok: true, msg: "migrated" })

  when "seed"
    load Rails.root.join("db/seeds.rb")
    respond(ok: true, body: { ok: true, msg: "seeded" })

  when "migrate+seed"
    ActiveRecord::Base.connection_pool.with_connection { ActiveRecord::MigrationContext.new("db/migrate", ActiveRecord::SchemaMigration).migrate }
    load Rails.root.join("db/seeds.rb")
    respond(ok: true, body: { ok: true, msg: "migrated+seeded" })

  when 'seed:replant', 'reseed'
    raise 'seed failed' unless system('bundle exec rails db:seed:replant')
    ok!('reseeded')

  else
    respond(ok: false, body: { ok: false, error: "unknown task=#{task}" })
  end
end
