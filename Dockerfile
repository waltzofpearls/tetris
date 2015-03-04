FROM ubuntu:14.04

MAINTAINER waltzofpearls <rollie.ma@gmail.com>

RUN apt-get install -y nodejs

COPY . /src

RUN cd /src; npm install; npm run build

ENV DEBUG=tetris
ENV NODE_ENV=production

EXPOSE  3000

CMD ["node", "/src/index.js"]
