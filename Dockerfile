FROM node:10.13.0-alpine

RUN apk add --no-cache bash git openssh-client

# Create app directory
WORKDIR /slacknotifier/

COPY package.json ./

COPY yarn.lock ./

# install cf-api required binaries
RUN apk add --no-cache --virtual deps python make g++ krb5-dev && \
    yarn install --frozen-lockfile --production && \
    yarn cache clean && \
    apk del deps && \
    rm -rf /tmp/*

# copy app files
COPY . ./

# run application
CMD ["node", "index.js"]
