# ── Build Stage ──
FROM node:18 AS builder
WORKDIR /app

# 依存関係のインストール
COPY package.json package-lock.json ./
RUN npm ci

# アプリのソースコードをコピーしてビルド
COPY . .
RUN npm run build

# ── Production Stage ──
# ここでは軽量な Node.js イメージを使用
FROM node:18-alpine
WORKDIR /app

# 静的ファイルを配信するために "serve" をグローバルインストール
RUN npm install -g serve

# builder から build/ をコピー
COPY --from=builder /app/build ./build

# Render で受信するポート（環境変数 PORT を使います）
# Render 側では環境変数 PORT が自動的に設定されますが、ローカル確認のためにデフォルト値も設定可能
ENV PORT=8000
EXPOSE ${PORT}

# serve を起動。ホストを 0.0.0.0 にして全インターフェースでリッスンする
CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:8000"]
