FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build

ENV PORT=8000
EXPOSE 8000
CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:8000"]
