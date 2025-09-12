set -euo pipefail

# ====== あなたの値 ======
REGION=ap-northeast-1
OWNER=communication-salon-lab
REPO=negaku-salon-app
ROLE_NAME=GitHubActionsDeployRole
ECR_REPOSITORY=salon-rails-lambda
APP_FUNC=salon-rails
# =======================

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text --region "$REGION")

# 0) GitHub OIDC プロバイダがあるか軽くチェック（無ければ後述の注意を表示）
if ! aws iam list-open-id-connect-providers --query 'OpenIDConnectProviderList[].Arn' --output text \
  | grep -q 'token.actions.githubusercontent.com'; then
  echo "[注意] OIDCプロバイダ(token.actions.githubusercontent.com)が未作成です。先にAWS側で作成してから再実行してください。"
  echo "（AWSコンソール または aws iam create-open-id-connect-provider ... で作成）"
fi

# 1) 信頼ポリシー
cat >/tmp/trust.json <<JSON
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": { "Federated": "arn:aws:iam::$ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com" },
    "Action": "sts:AssumeRoleWithWebIdentity",
    "Condition": {
      "StringEquals": {
        "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
        "token.actions.githubusercontent.com:sub": "repo:$OWNER/$REPO:*"
      }
    }
  }]
}
JSON

# 2) ロール作成（あればスキップ）
aws iam create-role \
  --role-name "$ROLE_NAME" \
  --assume-role-policy-document file:///tmp/trust.json \
  >/dev/null 2>&1 || echo "Role $ROLE_NAME already exists"

# 3) 最小権限ポリシー付与（ECR push / Lambda 更新 / Invoke migrate / CloudWatch Logs）
cat >/tmp/policy.json <<JSON
{
  "Version": "2012-10-17",
  "Statement": [
    { "Effect": "Allow", "Action": [
        "ecr:GetAuthorizationToken","ecr:BatchCheckLayerAvailability","ecr:CompleteLayerUpload",
        "ecr:DescribeRepositories","ecr:CreateRepository",
        "ecr:InitiateLayerUpload","ecr:PutImage","ecr:UploadLayerPart"
      ], "Resource": "*" },
    { "Effect": "Allow", "Action": [
        "lambda:GetFunction","lambda:UpdateFunctionCode"
      ], "Resource": [
        "arn:aws:lambda:$REGION:$ACCOUNT_ID:function:$APP_FUNC",
        "arn:aws:lambda:$REGION:$ACCOUNT_ID:function:$APP_FUNC-migrate"
      ]},
    { "Effect": "Allow", "Action": "lambda:InvokeFunction",
      "Resource": "arn:aws:lambda:$REGION:$ACCOUNT_ID:function:$APP_FUNC-migrate"
    },
    { "Effect": "Allow", "Action": [
        "logs:CreateLogGroup","logs:CreateLogStream","logs:PutLogEvents",
        "logs:DescribeLogStreams","logs:DescribeLogGroups"
      ], "Resource": "*"
    }
  ]
}
JSON

aws iam put-role-policy \
  --role-name "$ROLE_NAME" \
  --policy-name DeployPermissions \
  --policy-document file:///tmp/policy.json

# 4) ECR リポジトリ作成（存在すればスキップ）
aws ecr describe-repositories --repository-names "$ECR_REPOSITORY" --region "$REGION" >/dev/null 2>&1 \
  || aws ecr create-repository --repository-name "$ECR_REPOSITORY" --region "$REGION" >/dev/null

echo "Done."
echo "Role ARN: arn:aws:iam::$ACCOUNT_ID:role/$ROLE_NAME"
echo "ECR: $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$ECR_REPOSITORY"
