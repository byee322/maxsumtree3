FROM ruby:2.6.3-slim-stretch

RUN apt-get update && apt-get install -y \
  curl \
  build-essential \
  libgmp-dev \
  libpq-dev &&\
  curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y nodejs yarn

ENV CONTAINER_INIT /usr/local/bin/init-container
RUN echo '#!/usr/bin/env bash' > $CONTAINER_INIT ; chmod +x $CONTAINER_INIT

##
# Start any system services the app requires
##

RUN echo 'service postgresql start' >> $CONTAINER_INIT

RUN mkdir /maxsumtree3
WORKDIR /maxsumtree3

COPY Gemfile /maxsumtree3/Gemfile
COPY Gemfile.lock /maxsumtree3/Gemfile.lock
COPY . /maxsumtree3
COPY package.json .
COPY yarn.lock .

RUN gem install bundler:2.1.2
RUN bundle install
RUN yarn upgrade
RUN yarn install --check-files
RUN bundle install

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
