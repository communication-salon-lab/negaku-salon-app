require 'json'
require_relative 'config/environment'

def run_migrations
  ctx = ActiveRecord::MigrationContext.new(
    File.join(Rails.root, 'db', 'migrate'),
    ActiveRecord::SchemaMigration
  )
  ctx.migrate
end

def run_seeds
  load Rails.root.join('db', 'seeds.rb')
end

def handler(event:, context:)
  task = (event['task'] || 'migrate+seed').to_s
  case task
  when 'migrate'
    run_migrations
  when 'seed'
    run_seeds
  when 'migrate+seed'
    run_migrations
    run_seeds
  else
    raise "unknown task: #{task}"
  end

  { statusCode: 200, body: JSON.dump(ok: true, task: task) }
rescue => e
  { statusCode: 500, body: JSON.dump(ok: false, error: e.message) }
end
