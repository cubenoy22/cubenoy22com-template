FROM node:12.18.3-alpine
RUN \
# https://github.com/imagemin/optipng-bin/issues/110
  apk --no-cache add g++ make libpng-dev \
# install for sharp package
  autoconf automake libtool nasm \
# https://github.com/Automattic/node-canvas/issues/1486
  python jpeg-dev cairo-dev giflib-dev pango-dev && \
# install for ts-node
  npm i ts-node -g
WORKDIR /app
CMD ["sh"]