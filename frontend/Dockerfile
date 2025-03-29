FROM node:18 AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

FROM node:18-alpine
WORKDIR /app

RUN npm install -g serve
COPY --from=builder /app/build ./build

ENV PORT=8000
EXPOSE ${PORT}

CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:8000"]
