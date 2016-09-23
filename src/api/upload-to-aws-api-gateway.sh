aws apigateway put-rest-api --rest-api-id pn0vyjoxhk --body file://swagger-aws.json
aws apigateway create-deployment --rest-api-id pn0vyjoxhk --stage-name dev
