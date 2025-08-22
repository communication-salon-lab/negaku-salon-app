class Api::V1::SessionsController < ApplicationController
  def create
    admin = Admin.find_by(name: params[:name])

    if admin&.authenticate(params[:password])
      # JWTを生成
      # 有効期限を24時間に設定
      exp = Time.now.to_i + 24 * 3600
      payload = { admin_id: admin.id, exp: exp }

      # 秘密鍵は環境変数などで管理するのが望ましい
      secret_key = Rails.application.secrets.secret_key_base
      token = JWT.encode(payload, secret_key, 'HS256')

      render json: { token: token }
    else
      render json: { error: 'Invalid id or password' }, status: :unauthorized
    end
  end
end
