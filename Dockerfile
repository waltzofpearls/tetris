FROM waltzofpearls/nodejs

MAINTAINER waltzofpearls <rollie.ma@gmail.com>

WORKDIR /srv/www/tetris

COPY . .
COPY config/default.yml config/.

RUN \
    npm install && \
    npm run build

ENV PORT 3000
ENV DEBUG tetris

EXPOSE 3000

CMD ["/usr/bin/node", "bin/www"]
