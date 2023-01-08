FROM ruby:3.1.3-slim-bullseye AS assets
LABEL maintainer="blackstorm <inf2inf2@outlook.com>"

WORKDIR /app

ARG UID=1000
ARG GID=1000

ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NOWARNINGS="yes"

RUN bash -c "set -o pipefail && apt-get update \
  && apt-get install -yq --no-install-recommends build-essential curl git \
  && curl -sSL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get update && apt-get install -yq --no-install-recommends nodejs \
  && npm install --global yarn \
  && groupadd -g \"${GID}\" ruby \
  && useradd --create-home --no-log-init -u \"${UID}\" -g \"${GID}\" ruby \
  && mkdir /node_modules && chown ruby:ruby -R /node_modules /app"


USER ruby

RUN bundle config --global frozen 1
COPY --chown=ruby:ruby Gemfile* ./
RUN bundle install --jobs "$(nproc)"

COPY --chown=ruby:ruby package.json *yarn* ./
RUN yarn install

ARG RAILS_ENV="production"
ARG NODE_ENV="production"
ENV RAILS_ENV="${RAILS_ENV}" \
    NODE_ENV="${NODE_ENV}" \
    PATH="${PATH}:/home/ruby/.local/bin:/node_modules/.bin" \
    USER="ruby"

COPY --chown=ruby:ruby . .

RUN if [ "${RAILS_ENV}" != "development" ]; then SECRET_KEY_BASE=dummyvalue rails assets:precompile; fi

CMD ["bash"]

###############################################################################

FROM ruby:3.1.3-slim-bullseye AS app
LABEL maintainer="blackstorm <inf2inf2@outlook.com>"

WORKDIR /usr/src/goose

ARG UID=1000
ARG GID=1000

ENV DEBIAN_FRONTEND noninteractive
ENV DEBCONF_NOWARNINGS="yes"

RUN apt-get update \
  && apt-get install -yq --no-install-recommends build-essential curl \
  && rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man \
  && apt-get clean \
  && groupadd -g "${GID}" ruby \
  && useradd --create-home --no-log-init -u "${UID}" -g "${GID}" ruby \
  && chown ruby:ruby -R /usr/src/goose

ARG RAILS_ENV="production"
ARG GOOSE_DATA_PATH="/usr/src/goose/data"
ENV RUBY_YJIT_ENABLE="true" \
    RAILS_ENV="${RAILS_ENV}" \
    GOOSE_DATA_PATH="${GOOSE_DATA_PATH}" \
    PATH="${PATH}:/home/ruby/.local/bin" \
    USER="ruby"

COPY --chown=ruby:ruby --from=assets /usr/local/bundle /usr/local/bundle
COPY --chown=ruby:ruby --from=assets /app/public ./public
COPY --chown=ruby:ruby . .

ENTRYPOINT ["/usr/src/goose/bin/docker-entrypoint.sh"]

CMD ["/usr/src/goose/bin/start.sh"]

EXPOSE 3000
