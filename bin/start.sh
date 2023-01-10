#!/usr/bin/env bash

echo "Clear pid"
bundle exec rake tmp:pids:clear

echo "Run migrations"
bundle exec rake db:migrate

echo "Starting app server ..."
bundle exec rails s -p 3000 -b '0.0.0.0'
