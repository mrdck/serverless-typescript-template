import {
  APIGatewayProxyEventHeaders,
  APIGatewayProxyEventBase,
  APIGatewayProxyEventQueryStringParameters,
  APIGatewayProxyEventPathParameters,
  APIGatewayProxyEventMultiValueQueryStringParameters,
} from 'aws-lambda'

interface Request {
  body?: unknown
  headers?: APIGatewayProxyEventHeaders
  pathParameters?: APIGatewayProxyEventPathParameters
  queryStringParameters?: APIGatewayProxyEventQueryStringParameters
  multiValueQueryStringParameters?: APIGatewayProxyEventMultiValueQueryStringParameters
}

declare module 'aws-lambda' {
  interface APIGatewayProxyEvent<RequestGeneric extends Request = Request> extends APIGatewayProxyEventBase<unknown> {
    body: RequestGeneric['body']
    headers: RequestGeneric['headers']
    pathParameters: RequestGeneric['pathParameters']
    queryStringParameters: RequestGeneric['queryStringParameters']
    multiValueQueryStringParameters: RequestGeneric['multiValueQueryStringParameters']
  }
}
