<img src="https://raw.githubusercontent.com/blackstorm/goose/v0.0.1/app/assets/images/logo.png" width="48" height="48" />

# 🦆 Goose - A Simple and Lightweight Text Blog

[![Build Status](https://img.shields.io/github/actions/workflow/status/blackstorm/goose/release.yml)](https://github.com/blackstorm/goose/actions/workflows/release.yml)
[![Docker Pulls](https://img.shields.io/docker/pulls/gooseblog/gooseblog)](https://hub.docker.com/r/gooseblog/gooseblog)
[![License: MIT](https://img.shields.io/github/license/blackstorm/goose)](https://github.com/blackstorm/goose/blob/main/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/blackstorm/goose?logo=github)](https://github.com/blackstorm/goose/releases)


**Tired of using WordPress and static page generators? try Goose 🦆 now**

## Overview
Goose is a simple and lightweight text-style blog application that only uses three tables to store blog data. It's built on top of Ruby on Rails and SQLite 3. Goose has a beautiful admin interface and `markdown` support, it's very easy to use, it's a good choice for a personal blog.

## Preview
Blog home             | Article detail
:-------------------------:|:-------------------------:
![Goose blog Home](https://raw.githubusercontent.com/blackstorm/goose/main/doc/images/preview-home.png)  |  ![Goose blog article detail](https://raw.githubusercontent.com/blackstorm/goose/main/doc/images/preview-article.png)

Admin & Editor             |  Admin settings
:-------------------------:|:-------------------------:
![Goose admin editor](https://raw.githubusercontent.com/blackstorm/goose/main/doc/images/preview-editor.png) | ![Goose admin setting](https://raw.githubusercontent.com/blackstorm/goose/main/doc/images/preview-setting.png)


## Features
### RSS
Get your blog rss feed by `https://your-domain/feed`

## Quick start  

### Docker

```
docker pull gooseblog/gooseblog:v0.1.1
```

```
docker run -it -p 3000:3000 -e SECRET_KEY_BASE=happy-goose-blog -e RAILS_LOG_TO_STDOUT=1 gooseblog/gooseblog:v0.1.1
```

### Docker Compose
Create a `docker-compose.yml` file in your server workspace then run command `docker compose up -d`

```yaml
version: "3"

services:
  goose:
    image: gooseblog/gooseblog:v0.1.1
    ports:
      - "80:3000"
    environment:
      SECRET_KEY_BASE: "happy-goose-blog"
      RAILS_LOG_TO_STDOUT: "1"
    volumes:
      - ./data:/usr/src/goose/data
```

## Environment variables
In order to safely to run Goose, ensure is set the `SECRET_KEY_BASE` environment value.

| Name | Description | Default |
| --- | --- | --- |
| SECRET_KEY_BASE | Secret key base for rails | `NULL` |
| RAILS_LOG_TO_STDOUT | Log to stdout | `NULL` |

## [Live Demo 🔥](https://demo.getgooseblog.com) 

[Admin Interface](https://demo.getgooseblog.com/admin)

```
username: admin
password: adminadmin
```

## The Logo
Goose logo from [Icons8](https://icons8.com/icon/voq5kWfX8meG/flying-duck)
