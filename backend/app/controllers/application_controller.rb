class ApplicationController < ActionController::API
    
    private

    def authenticate_admin!
    # ヘッダーからトークンを取得
    token = request.headers['Authorization']&.split(' ')&.last
    return render json: { error: 'Not Authorized' }, status: :unauthorized unless token

    # トークンのデコード
    begin
      secret_key = Rails.application.secrets.secret_key_base
      decoded_token = JWT.decode(token, secret_key, true, { algorithm: 'HS256' })
      @current_admin_id = decoded_token[0]['admin_id']
    rescue JWT::DecodeError
      render json: { error: 'Invalid token' }, status: :unauthorized
    end
  end
end
