FROM ubuntu:14.04

MAINTAINER waltzofpearls <rollie.ma@gmail.com>

COPY . /srv/www/tetris

RUN \
    apt-get update && \
    apt-get install -y
        nodejs \
        npm \
        && \
    ln -s /usr/bin/nodejs /usr/bin/node

WORKDIR /srv/www/tetris

RUN \
    npm install && \
    npm run build

ENV PORT 3000
ENV DEBUG tetris
ENV NODE_ENV production

EXPOSE 3000

CMD ["/usr/bin/node", "./bin/www"]
