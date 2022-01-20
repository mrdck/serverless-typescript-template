import { lambdaWrapper } from 'serverless-jest-plugin'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { APIGatewayProxyEvent } from 'aws-lambda'

import * as handler from '../src/health'

describe('GET /health', () => {
  const endpoint = lambdaWrapper.wrap(handler, { handler: 'health' })

  test('returns 200 HTTP', async () => {
    const response = await endpoint.run({} as unknown as APIGatewayProxyEvent)

    expect(response.statusCode).toEqual(StatusCodes.OK)
    expect(response.body).toEqual(ReasonPhrases.OK)
  })
})
