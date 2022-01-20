import 'reflect-metadata'

import { Container } from 'inversify'

import config from './config'

/**
 * Root Composite component that instantiate and hooks Inversion of Control container
 */
export const compositeRoot = () => {
  const container = new Container()

  container.load(config)

  return container
}

export const container = compositeRoot()
