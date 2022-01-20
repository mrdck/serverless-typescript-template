import 'typesafe-api-gateway'

import { interfaces } from 'inversify'

declare module 'aws-lambda' {
  interface Context extends LambdaContext {
    container: interfaces.Container
  }
}
