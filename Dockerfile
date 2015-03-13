FROM waltzofpearls/nodejs

MAINTAINER waltzofpearls <rollie.ma@gmail.com>

WORKDIR /srv/www/tetris

COPY . .
COPY config/dist.yml config/.

RUN \
    npm install && \
    npm run build && \
    tee config/testing.yml config/production.yml < config/dist.yml

ENV PORT 3000
ENV DEBUG tetris

EXPOSE 3000

CMD ["/usr/bin/node", "bin/www"]
