#!/bin/bash
set -e

# 再起動時に残るPIDを削除
rm -f tmp/pids/server.pid || true

: "${DB_HOST:=db}"
: "${DB_ROOT_PASSWORD:=password}"
echo "Waiting for MySQL at ${DB_HOST}..."
until mysqladmin ping -h"${DB_HOST}" -u root -p"${DB_ROOT_PASSWORD}" --silent; do
  sleep 1
done

if bundle exec rails -T | grep -q "db:prepare"; then
  echo "Running: rails db:prepare"
  bundle exec rails db:prepare
else
  echo "db:prepare not found. Running: db:create db:migrate"
  bundle exec rails db:create db:migrate
fi

exec "$@"
