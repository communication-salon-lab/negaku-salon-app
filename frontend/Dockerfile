# ベースイメージ
FROM --platform=linux/amd64 node:18

# 作業ディレクトリの設定
WORKDIR /app

# パッケージインストール
COPY package.json package-lock.json ./
RUN npm ci

# アプリケーションのコードをコピー
COPY . .

# 開発サーバーのポート
ENV PORT=8000
EXPOSE 8000

# 開発用コマンド（ホットリロードなどが有効）
CMD ["npm", "start"]
