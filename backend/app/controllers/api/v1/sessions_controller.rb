class Api::V1::SessionsController < ApplicationController
  def create
    ddb = Aws::DynamoDB::Client.new(region: ENV.fetch("AWS_REGION","ap-northeast-1"))
    resp = ddb.get_item(
      table_name: ENV.fetch("ADMINS_TABLE","Admins"),
      key: { "name" => params[:name] }
    )
    admin = resp.item

    if admin && secure_compare(admin["password"].to_s, params[:password].to_s)
      exp     = Time.now.to_i + 24 * 3600
      payload = { admin_name: admin["name"], exp: exp }
      token   = JWT.encode(payload, ENV.fetch("JWT_SECRET"), 'HS256')
      render json: { token: token }
    else
      render json: { error: 'Invalid id or password' }, status: :unauthorized
    end
  rescue Aws::DynamoDB::Errors::ServiceError => e
    Rails.logger.error("[DDB] auth failed: #{e.class}: #{e.message}")
    render json: { error: "Internal Server Error" }, status: :internal_server_error
  end

  private
  def secure_compare(a, b)
    return false if a.bytesize != b.bytesize
    l = a.unpack "C#{a.bytesize}"
    res = 0
    b.each_byte { |byte| res |= byte ^ l.shift }
    res == 0
  end
end
