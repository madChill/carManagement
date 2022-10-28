# set the base image
FROM node:lts as build
# set working directory
WORKDIR /app
# copy everything to /app directory
# as opposed to on dev, in prod everything is copied to docker
COPY . /app
# add the node_modules folder to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install and cache dependencies
RUN yarn
#build the project for production
RUN yarn build
CMD ["yarn", "start"]