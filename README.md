# negaku-salon-app
専修大学 ネットワーク情報学部ネットワーク情報学科
コミュニケーションサロンラボのwebアプリケーション

## 環境構築手順 (cloneあと)

#### 1.環境変数ファイルの作成

```bash
cd backend
touch backend/.env.local
```
```bash
cd frontend
touch frontend/.env.local
```
先輩チームメンバーに、記述する内容を聞く。


#### 2.イメージ作成,Docker起動

```bash
docker compose build
docker compose up
```
終了は control + cコマンドを入力します。

#### 3.コンテナへのログイン
バックエンド
```bash
docker exec -it back bash
```
フロントエンド
```bash
docker exec -it front bash
```
コンテナからログアウト
```bash
exit
```

#### 4.コンテナのコマンドプロンプトスタイル変更
バックエンドにログイン後
```bash
echo 'export PS1="\[\e[1;33m\]rails:\w \u\[\e[m\]# "' >> ~/.bashrc
source ~/.bashrc
```
フロントエンドにログイン後
```bash
echo 'export PS1="\[\e[1;34m\]rails:\w \u\[\e[m\]# "' >> ~/.bashrc
source ~/.bashrc
```

#### 5.アプリケーションの起動
バックエンドの起動
```bash
bin/rails s -b 0.0.0.0 -p 3500
```

- フロントエンド (React) はポート http://localhost:8000 でアクセスできます。
- バックエンド (Rails API) はポート http://localhost:3500 でアクセスできます。
- MySQLデータベースはポート 3306 で接続できます。


## その他コマンド
- コンテナの停止
```bash
docker compose down
```
- 不要なキャッシュとボリュームの削除
```bash
docker compose down --volumes --remove-orphans
```