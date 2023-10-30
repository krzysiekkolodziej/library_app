FROM node:18.10.0

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

COPY ./ ./

RUN yarn

CMD ["yarn", "start"]
