# config/initializers/dynamodb.rb
require 'aws-sdk-dynamodb'

DYNAMO_CLIENT = Aws::DynamoDB::Client.new(
  region: ENV.fetch('AWS_REGION', 'ap-northeast-1')
)
