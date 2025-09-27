class ApplicationController < ActionController::API
  private

  def ddb
    @ddb ||= Aws::DynamoDB::Client.new(
      region: ENV.fetch("AWS_REGION", "ap-northeast-1")
    )
  end

  def articles_table
    # ★ 既存テーブル名に合わせる（大文字の "Articles"）
    ENV.fetch("ARTICLES_TABLE", "Articles")
  end

  def admins_table
    ENV.fetch("ADMINS_TABLE", "Admins")
  end

  def authenticate_admin!
    token = request.headers['Authorization']&.split(' ')&.last
    return render json: { error: 'Not Authorized' }, status: :unauthorized unless token

    begin
      secret_key = ENV.fetch("JWT_SECRET") { Rails.application.secret_key_base }
      decoded = JWT.decode(token, secret_key, true, algorithm: 'HS256')
      @current_admin_id = decoded[0]['admin_id']
    rescue JWT::DecodeError
      render json: { error: 'Invalid token' }, status: :unauthorized
    end
  end
end
