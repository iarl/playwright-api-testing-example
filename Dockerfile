# syntax=docker/dockerfile:1
FROM node:18-alpine

WORKDIR /tests

COPY package*.json /tests/

RUN npm install --include=dev
COPY . .
CMD [ "npm", "run", "test" ]