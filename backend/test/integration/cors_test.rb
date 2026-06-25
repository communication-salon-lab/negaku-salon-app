require "test_helper"

class CorsTest < ActionDispatch::IntegrationTest
  test "allows preflight requests from www production domain" do
    origin = "https://www.communication-salon.com"

    options "/api/v1/login", headers: {
      "Origin" => origin,
      "Access-Control-Request-Method" => "POST",
      "Access-Control-Request-Headers" => "Content-Type"
    }

    assert_includes [200, 204], response.status
    assert_equal origin, response.headers["Access-Control-Allow-Origin"]
    assert_includes response.headers["Access-Control-Allow-Methods"], "POST"
  end
end
