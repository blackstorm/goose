## Get Started!

### Running on docker

```
docker build -t goose/goose .
docker run -it -p 3000:3000 -e SECRET_KEY_BASE=123 -e RAILS_LOG_TO_STDOUT=1 goose/goose
```

### Running with docker-compose
```
docker-compose up -d
```
