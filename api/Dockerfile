FROM node:lts
WORKDIR /app

# RUN apk add --update \
#     python \
#     python-dev \
#     py-pip \
#     build-base \
#   && pip install virtualenv \
#   && rm -rf /var/cache/apk/*

RUN npm install rimraf -g

COPY package*.json /app/
RUN npm install

COPY . /app/
RUN npm run build
# RUN npm run start:prod