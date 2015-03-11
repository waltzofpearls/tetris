FROM waltzofpearls/nodejs

MAINTAINER waltzofpearls <rollie.ma@gmail.com>

COPY . /srv/www/tetris

WORKDIR /srv/www/tetris

RUN \
    npm install && \
    npm run build

ENV PORT 3000
ENV DEBUG tetris

EXPOSE 3000

CMD ["/usr/bin/node", "./bin/www"]
