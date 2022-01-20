import type { APIGatewayProxyResult } from 'aws-lambda'
import type { StatusCodes } from 'http-status-codes'

type HeaderValue = boolean | number | string
type Headers = Record<string, HeaderValue>

/**
 * CORS Headers
 */
const cors = {
  'Access-Control-Allow-Origin':      '*',
  'Access-Control-Allow-Credentials': true,
}

/**
 * HTTP Response factory
 */
export function response<T = unknown>(status: StatusCodes, payload: T, headers?: Headers): APIGatewayProxyResult {
  const body = typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2)

  return {
    statusCode: status,
    headers:    {
      ...cors,
      ...headers,
    },
    body,
  }
}
