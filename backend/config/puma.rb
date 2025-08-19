# config/puma.rb
# frozen_string_literal: true

require "fileutils"

# ===== Thread / Env =====
max_threads = Integer(ENV.fetch("RAILS_MAX_THREADS", 5))
min_threads = Integer(ENV.fetch("RAILS_MIN_THREADS", max_threads))
threads min_threads, max_threads

rails_env = ENV.fetch("RAILS_ENV", ENV.fetch("RACK_ENV", "development"))
environment rails_env

# ===== Bind / Port =====
# App Runnerでは 0.0.0.0:8080、ローカルは 3000 をデフォルトに
default_port = rails_env == "production" ? "8080" : "3000"
port_str = ENV.fetch("PORT", default_port)
bind "tcp://0.0.0.0:#{port_str}"

# ===== Workers（任意。WEB_CONCURRENCY を設定すれば有効化）=====
web_concurrency = Integer(ENV.fetch("WEB_CONCURRENCY", 0))
if web_concurrency > 0
  workers web_concurrency
  preload_app!
end

# Devは長めのタイムアウト
worker_timeout 3600 if rails_env == "development"

pid_path = ENV.fetch("PIDFILE", "tmp/pids/server.pid")
FileUtils.mkdir_p(File.dirname(pid_path))
pidfile pid_path

# STDOUT/STDERRへログ（環境変数があれば）
if ENV["RAILS_LOG_TO_STDOUT"] == "1"
  stdout_redirect "/proc/self/fd/1", "/proc/self/fd/2", true
end

on_worker_boot do
  begin
    if defined?(ActiveRecord::Base)
      ActiveRecord::Base.establish_connection
    end
  rescue => e
    warn "ActiveRecord reconnect failed: #{e.class}: #{e.message}"
  end
end

plugin :tmp_restart
