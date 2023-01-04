#!/usr/bin/env bash

echo "Clearing logs"
bin/rake log:clear

echo "Run migrations"
bundle exec rake db:migrate

echo "Seed database"
bundle exec rake db:seed

echo "Removing contents of tmp dirs"
bin/rake tmp:clear

echo "Starting app server ..."
bundle exec rails s -p 3000 -b '0.0.0.0'