# config/puma.rb
# frozen_string_literal: true

# Threads
max_threads = Integer(ENV.fetch("RAILS_MAX_THREADS", 5))
min_threads = Integer(ENV.fetch("RAILS_MIN_THREADS", max_threads))
threads min_threads, max_threads

# Environment
rails_env = ENV.fetch("RAILS_ENV", ENV.fetch("RACK_ENV", "development"))
environment rails_env

# Bind/Port  — App Runnerは8080、ローカルは3000をデフォルトに
default_port = rails_env == "production" ? 8080 : 3000
port ENV.fetch("PORT", default_port)

# Workers（必要なら WEB_CONCURRENCY を設定）
web_concurrency = Integer(ENV.fetch("WEB_CONCURRENCY", 0))
if web_concurrency > 0
  workers web_concurrency
  preload_app!

  # マルチプロセス時にDB再接続（cluster時のみ）
  on_worker_boot do
    begin
      require "active_record"
      ActiveRecord::Base.establish_connection if defined?(ActiveRecord::Base)
    rescue => e
      warn "ActiveRecord reconnect failed: #{e.class}: #{e.message}"
    end
  end
end

# Devでの長めのタイムアウト
worker_timeout 3600 if rails_env == "development"

# PID / tmp_restart
pidfile ENV.fetch("PIDFILE", "tmp/pids/server.pid")
plugin :tmp_restart
