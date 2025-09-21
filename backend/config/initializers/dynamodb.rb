# config/initializers/dynamodb.rb
require 'aws-sdk-dynamodb'

DYNAMO_CLIENT = Aws::DynamoDB::Client.new(region: 'ap-northeast-1')
