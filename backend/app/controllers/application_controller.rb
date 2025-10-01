class ApplicationController < ActionController::API
  private

  def ddb
    @ddb ||= Aws::DynamoDB::Client.new(
      region: ENV.fetch("AWS_REGION", "ap-northeast-1")
    )
  end

  def articles_table
    ENV.fetch("ARTICLES_TABLE", "Articles")
  end

  def admins_table
    ENV.fetch("ADMINS_TABLE", "Admins")
  end

  def authenticate_admin!
    token = request.headers['Authorization']&.split(' ')&.last
    return render json: { error: 'Not Authorized' }, status: :unauthorized unless token

    begin
      decoded = JWT.decode(token, ENV.fetch("JWT_SECRET"), true, { algorithm: 'HS256' })
      @current_admin_name = decoded[0]['admin_name']
    rescue JWT::DecodeError
      render json: { error: 'Invalid token' }, status: :unauthorized
    end
  end
end
