
# Threads
max_threads = Integer(ENV.fetch("RAILS_MAX_THREADS", 5))
min_threads = Integer(ENV.fetch("RAILS_MIN_THREADS", max_threads))
threads min_threads, max_threads

# Environment
rails_env = ENV.fetch("RAILS_ENV", ENV.fetch("RACK_ENV", "development"))
environment rails_env

# Bind/Port
default_port = rails_env == "production" ? "8080" : "3000"
bind "tcp://0.0.0.0:#{ENV.fetch('PORT', default_port)}"

# Workers
web_concurrency = Integer(ENV.fetch("WEB_CONCURRENCY", 0))
if web_concurrency > 0
  workers web_concurrency
  preload_app!
end

# Devでの長めのタイムアウト
worker_timeout 3600 if rails_env == "development"

# PID / tmp_restart
pidfile ENV.fetch("PIDFILE", "tmp/pids/server.pid")
plugin :tmp_restart

# マルチプロセス時にDB再接続
on_worker_boot do
  begin
    require "active_record"
    ActiveRecord::Base.establish_connection if defined?(ActiveRecord::Base)
  rescue => e
    warn "ActiveRecord reconnect failed: #{e.class}: #{e.message}"
  end
end
