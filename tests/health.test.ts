import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { context, ApiGatewayEvent } from 'serverless-plugin-test-helper'

import { health } from '../src/health'

describe('GET /health', () => {
  test('returns 200 HTTP', async () => {
    const handler = health(new ApiGatewayEvent(), context, jest.fn())

    await expect(handler).resolves.toMatchObject({
      body:       ReasonPhrases.OK,
      statusCode: StatusCodes.OK,
    })
  })
})
