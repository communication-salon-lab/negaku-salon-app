require 'bundler/setup'
require 'lamby'
require_relative 'config/environment'

$app = Rack::Builder.new { run Rails.application }

def handler(event:, context:)
  Lamby.handler($app, event, context)
end
