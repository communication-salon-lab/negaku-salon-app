FROM ruby:3.1.6

RUN apt-get update -qq \
 && apt-get install -y --no-install-recommends nodejs default-mysql-client \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app


COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install

COPY . .

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["/usr/bin/entrypoint.sh"]

EXPOSE 3500
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0", "-p", "3500"]
