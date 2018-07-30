FROM node:8-alpine

RUN apk add --no-cache --virtual .gyp python make g++ imagemagick imagemagick-c++ mysql-client

COPY . /home/frontend/

WORKDIR /home/frontend/
RUN pwd
RUN ls -alh
RUN npm install
CMD ["npm", "run", "start"]
