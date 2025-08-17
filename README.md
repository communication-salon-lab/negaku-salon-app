# negaku-salon-app
専修大学 ネットワーク情報学部ネットワーク情報学科
コミュニケーションサロンラボのwebアプリケーション

## 環境構築手順 (cloneあと)

### 前提条件
- Docker と Docker Compose がインストールされていること

### 1.環境変数ファイルの作成

```bash
touch backend/.env.local
```
例
```bash
DB_HOST=db
DB_USER=root
DB_PASSWORD=password
DB_NAME=salon_development
RAILS_MASTER_KEY=********
```


```bash
touch frontend/.env.local
```
例
```bash
REACT_APP_API_URL=http://localhost:3500
```
具体的には、先輩チームメンバーに記述する内容を聞く。

### 2.イメージ作成,Docker起動

```bash
docker compose build
docker compose up
```
終了は control + cコマンドを入力します。

### 3.コンテナへのログイン
バックエンド
```bash
docker compose exec back bash
```
フロントエンド
```bash
docker compose exec front sh
```
ログアウト
```bash
exit
```

### 4.コンテナのコマンドプロンプトスタイル変更
バックエンドにログイン後
```bash
echo 'export PS1="\[\e[1;33m\]rails:\w \u\[\e[m\]# "' >> ~/.bashrc
source ~/.bashrc
```
フロントエンドにログイン後
```bash
echo 'export PS1="\[\e[1;34m\]react:\w \u\[\e[m\]# "' >> ~/.bashrc
source ~/.bashrc
```

### 5.アプリケーションの起動
- フロントエンド (React) はポート http://localhost:8000
- バックエンド (Rails API) はポート http://localhost:3500
- MySQLデータベースはポート 3306 で接続可能

### 6. 本番デプロイ
AWS App Runner を使う場合は、.env.local は不要。環境変数はAWSコンソールに設定する。

## その他コマンド
- コンテナの停止（コンテナは残る）
Ctrl+C

- コンテナの削除（再度build/upが必要）
```bash
docker compose down
```
- 不要なキャッシュとボリュームの削除
```bash
docker compose down --volumes --remove-orphans
```