import type { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'

import { response, Config, middleware } from './common'

export async function handler(_: APIGatewayProxyEvent, { container }: Context): Promise<APIGatewayProxyResult> {
  const config = container.get<Config>(Config)

  /**
   * This code below serve example purpose for getting values out of container
   */
  if (config.foo) {
    console.log('foo')
  }

  return response(StatusCodes.OK, ReasonPhrases.OK)
}

export const health = middleware(handler)
