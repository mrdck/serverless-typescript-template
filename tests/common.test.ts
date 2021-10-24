import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { response } from '../src/common'

describe('Common', () => {
  describe('response()', () => {
    test('returns valid HTTP response with string based body', () => {
      expect(response(StatusCodes.OK, ReasonPhrases.OK)).toEqual({
        body:    ReasonPhrases.OK,
        headers: {
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin':      '*',
        },
        statusCode: 200,
      })
    })

    test('returns valid HTTP response with JSON based body', () => {
      const payload = {
        foo: 'bar',
      }

      expect(response(StatusCodes.OK, payload)).toEqual({
        body:    JSON.stringify(payload, null, 2),
        headers: {
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin':      '*',
        },
        statusCode: 200,
      })
    })
  })
})
