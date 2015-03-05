FROM ubuntu:14.04

MAINTAINER waltzofpearls <rollie.ma@gmail.com>

COPY . /src

RUN \
    apt-get update && \
    apt-get install -y build-essential && \
    apt-get install -y nodejs npm && \
    ln -s /usr/bin/nodejs /usr/bin/node
RUN \
    cd /src; npm install && \
    npm install -g grunt-cli && \
    npm run build

ENV PORT 3000
ENV DEBUG tetris
ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "/src/bin/www"]
