import type { APIGatewayProxyResult } from 'aws-lambda'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'

import { response } from './common'

export async function health(): Promise<APIGatewayProxyResult> {
  return response(StatusCodes.OK, ReasonPhrases.OK)
}
