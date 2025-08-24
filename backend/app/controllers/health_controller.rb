class HealthController < ActionController::API
  def show
    render json: { status: "ok", time: Time.now.utc.iso8601 }
  end
end
