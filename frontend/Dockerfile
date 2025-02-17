# ベースイメージ
FROM --platform=linux/amd64 node:18

# 作業ディレクトリを変更
WORKDIR /app

# パッケージインストール
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# アプリケーションのコードをコピー
COPY . .

# Reactのビルド
RUN yarn build
RUN npm install -g serve

# ポートの公開
EXPOSE 8000

# Reactを起動するコマンド
CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:8000"]
