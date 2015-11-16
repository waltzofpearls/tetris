FROM waltzofpearls/nodejs

MAINTAINER waltzofpearls <rollie.ma@gmail.com>

ADD docker/run /etc/service/tetris/run

WORKDIR /srv/www/tetris-js

COPY . .

RUN \
    npm run gulp build && \
    tee config/development.yml \
        config/testing.yml \
        config/production.yml < config/dist.yml

ENV PORT 3000
ENV DEBUG tetris-js

EXPOSE 3000

CMD ["/sbin/my_init"]
