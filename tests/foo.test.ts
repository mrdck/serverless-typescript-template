import { context } from 'serverless-plugin-test-helper'
import { StatusCodes } from 'http-status-codes'
import type { APIGatewayProxyEvent } from 'aws-lambda'

import { foo, Foo } from '../src/foo'

const proxyEventFactory = (body: unknown): APIGatewayProxyEvent<{ body: Foo }> => {
  return {
    body,
  } as unknown as APIGatewayProxyEvent<{ body: Foo }>
}

describe('POST /foo', () => {
  test('returns 400 HTTP', async () => {
    const event = proxyEventFactory({ invalid: 'invalid' })
    const handler = foo(event, context, jest.fn())

    await expect(handler).resolves.toMatchObject({
      body:       'Event object failed validation',
      statusCode: StatusCodes.BAD_REQUEST,
    })
  })

  test('returns 200 HTTP', async () => {
    const event = proxyEventFactory({ bar: 'aaaa', foo: 'aaaaaaaaaaaaa' })
    const handler = foo(event, context, jest.fn())

    await expect(handler).resolves.toMatchObject({
      statusCode: StatusCodes.OK,
    })
  })
})
