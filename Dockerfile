FROM waltzofpearls/nodejs

MAINTAINER waltzofpearls <rollie.ma@gmail.com>

WORKDIR /srv/www/tetris

COPY . .

RUN \
    npm install && \
    npm run build

ENV PORT 3000
ENV DEBUG tetris

EXPOSE 3000

CMD ["/usr/bin/node", "bin/www"]
