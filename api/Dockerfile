FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

ENV APP_VERSION=v1

CMD ["node", "server.js"]
