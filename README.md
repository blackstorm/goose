# Goose

[![Build Status](https://img.shields.io/github/actions/workflow/status/blackstorm/goose/release.yml)](https://github.com/blackstorm/goose/actions/workflows/release.yml)
[![Docker Pulls](https://img.shields.io/docker/pulls/gooseblog/gooseblog)](https://hub.docker.com/r/gooseblog/gooseblog)
[![License: MIT](https://img.shields.io/github/license/blackstorm/goose)](https://github.com/blackstorm/goose/blob/main/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/blackstorm/goose?logo=github)](https://github.com/blackstorm/goose/releases)


**Tired of using WordPress and page generators? try Goose🦆**

## Overview
Goose is a simple and lightweight text-style blog application that only uses three tables to store blog data. It's built on top of Ruby on Rails and SQLite 3. Goose has a beautiful admin interface and is very easy to use and install; it's a good choice for a personal blog.

## Preview
![Goose blog home](https://raw.githubusercontent.com/blackstorm/goose/main/doc/images/preview-home.png)

![Goose blog article](https://raw.githubusercontent.com/blackstorm/goose/main/doc/images/preview-article.png)

![Goose admin editor](https://raw.githubusercontent.com/blackstorm/goose/main/doc/images/preview-editor.png)

![Goose admin setting](https://raw.githubusercontent.com/blackstorm/goose/main/doc/images/preview-setting.png)

## Quick start  

### Docker

```
docker run -it -p 3000:3000 -e SECRET_KEY_BASE=happy-goose-blog -e RAILS_LOG_TO_STDOUT=1 goose/goose:v0.1.0
```

### Docker Compose
Highly recommend use docker-compose to run goose. Create a `docker-compose.yml` in your server workspace then run command `docker compose up -d`

```yaml
version: "3"

services:
  goose:
    image: gooseblog/gooseblog:v0.0.1
    ports:
      - "80:3000"
    environment:
      SECRET_KEY_BASE: "happy-goose-blog"
      RAILS_LOG_TO_STDOUT: "1"
    volumes:
      - ./data:/usr/src/goose/data
```

## Environment variables
In order to safely run Goose, ensure the SECRET_KEY_BASE environment value is set.

| Name | Description | Default |
| --- | --- | --- |
| SECRET_KEY_BASE | Secret key base for rails | `NULL` |
| RAILS_LOG_TO_STDOUT | Log to stdout | `NULL` |

## Visit [demo](https://demo.getgooseblog.com) 

Access [demo site admin](https://demo.getgooseblog.com/admin)

admin account:
```
username: admin
password: adminadmin
```
