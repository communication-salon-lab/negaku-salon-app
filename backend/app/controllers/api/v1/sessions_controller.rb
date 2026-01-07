class Api::V1::SessionsController < ApplicationController
  def create
    # DynamoDBのコードを削除し、ActiveRecordに変更
    admin = Admin.find_by(name: params[:name])

    if admin&.authenticate(params[:password])
      exp     = Time.now.to_i + 24 * 3600
      payload = { admin_name: admin.name, exp: exp }
      token   = JWT.encode(payload, ENV.fetch("JWT_SECRET"), 'HS256')
      render json: { token: token }
    else
      render json: { error: 'Invalid id or password' }, status: :unauthorized
    end
  end
end