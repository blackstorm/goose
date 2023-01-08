#!/usr/bin/env bash

chown -R ruby:ruby ${GOOSE_DATA_PATH}
exec runuser -u ruby "$@"
