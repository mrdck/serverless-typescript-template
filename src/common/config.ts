import * as env from 'env-var'
import { ContainerModule } from 'inversify'

export interface Config {
  foo: string
}

export const Config = Symbol('Config')

const resolve = (): Config => ({
  foo: env.get('NODE_ENV').default('testing').asString(),
})

export default new ContainerModule(bind => {
  bind<Config>(Config).toConstantValue(resolve())
})
