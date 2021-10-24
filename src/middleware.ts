import middy from '@middy/core'
import bodyParser from '@middy/http-json-body-parser'
import errorHandler from '@middy/http-error-handler'

import type { Handler } from 'aws-lambda'

/**
 * No Operation logger
 */
const nullLogger = () => null

/**
 * Base middleware
 */
export const middleware = <Event, Context>(handler: Handler<Event, Context>) => {
  return middy(handler)
    .use(bodyParser())
    .use(errorHandler({ logger: nullLogger }))
}
