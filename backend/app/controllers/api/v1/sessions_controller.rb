class Api::V1::SessionsController < ApplicationController
  def create
    name = params[:name].to_s
    rec = ddb.get_item(table_name: admins_table, key: { "name" => name }).item
    return render json: { error: 'Invalid id or password' }, status: :unauthorized unless rec&.dig("password_digest")

    ok = BCrypt::Password.new(rec["password_digest"]) == params[:password].to_s
    return render json: { error: 'Invalid id or password' }, status: :unauthorized unless ok

    exp = (Time.now + 24*3600).to_i
    payload = { admin_id: name, exp: exp }
    secret_key = ENV.fetch("JWT_SECRET") { Rails.application.secret_key_base }
    token = JWT.encode(payload, secret_key, 'HS256')
    render json: { token: token }
  end
end
