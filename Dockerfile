FROM ruby:3.1.3-bullseye AS assets
LABEL maintainer="blackstorm <inf2inf2@outlook.com>"

WORKDIR /app

ARG UID=1000
ARG GID=1000


RUN bash -c "set -o pipefail && apt-get update \
  && apt-get install -yq --no-install-recommends build-essential curl git libpq-dev \
  && curl -sSL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get update && apt-get install -yq --no-install-recommends nodejs tree \
  && npm install --global yarn \
  && groupadd -g \"${GID}\" ruby \
  && useradd --create-home --no-log-init -u \"${UID}\" -g \"${GID}\" ruby \
  && mkdir /node_modules && chown ruby:ruby -R /node_modules /app"


USER ruby

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

RUN tree -L 3 -I node_modules

CMD ["bash"]

###############################################################################

FROM ruby:3.1.3-bullseye AS app
LABEL maintainer="blackstorm <inf2inf2@outlook.com>"

WORKDIR /usr/src/goose

ARG UID=1000
ARG GID=1000

RUN apt-get update \
  && apt-get install -yq --no-install-recommends build-essential curl libpq-dev sqlite3 \
  && rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man \
  && apt-get clean \
  && groupadd -g "${GID}" ruby \
  && useradd --create-home --no-log-init -u "${UID}" -g "${GID}" ruby \
  && chown ruby:ruby -R /usr/src/goose

USER ruby

ARG RAILS_ENV="production"
ARG GOOSE_DATA_PATH="/user/src/goose/data"
ENV GOOSE_DATA_PATH="${GOOSE_DATA_PATH}" \
    RUBY_YJIT_ENABLE="true" \
    RAILS_ENV="${RAILS_ENV}" \
    PATH="${PATH}:/home/ruby/.local/bin" \
    USER="ruby"

COPY --chown=ruby:ruby --from=assets /usr/local/bundle /usr/local/bundle
COPY --chown=ruby:ruby --from=assets /app/public ./public
COPY --chown=ruby:ruby . .

ENTRYPOINT ["/usr/src/goose/bin/docker-entrypoint.sh"]

EXPOSE 3000
