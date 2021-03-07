FROM cypress/base:10

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install --save-dev cypress@5.6.0

RUN $(npm bin)/cypress verify
