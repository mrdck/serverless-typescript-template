import { lambdaWrapper } from 'serverless-jest-plugin'
import { StatusCodes } from 'http-status-codes'
import type { APIGatewayProxyEvent } from 'aws-lambda'

import { foo, Foo } from '../src/foo'

const proxyEventFactory = (body: unknown): APIGatewayProxyEvent<{ body: Foo }> => {
  return {
    body,
  } as unknown as APIGatewayProxyEvent<{ body: Foo }>
}

describe('POST /foo', () => {
  const endpoint = lambdaWrapper.wrap({ foo }, { handler: 'foo' })

  test('returns 400 HTTP', async () => {
    const response = await endpoint.run(proxyEventFactory({ invalid: 'invalid' }))

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    expect(response.body).toEqual('Event object failed validation')
  })

  test('returns 200 HTTP', async () => {
    const response = await endpoint.run(proxyEventFactory({ bar: 'aaaa', foo: 'aaaaaaaaaaaaa' }))

    expect(response.statusCode).toEqual(StatusCodes.OK)
  })
})
