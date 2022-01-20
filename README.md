<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Serverless Typescript Project Starter](#serverless-typescript-project-starter)
    - [Install](#install)
    - [Running locally](#running-locally)
    - [Testing](#testing)
    - [Lint](#lint)
    - [Deployment](#deployment)
    - [Project Structure](#project-structure)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<h1>Serverless Typescript Project Starter</h1>

### Install

Using serverless
```bash
serverless install --url https://github.com/mrdck/serverless-typescript-template --name serverless-application
```

Using git clone
```bash
git clone https://github.com/mrdck/serverless-typescript-template serverless-application
cd serverless-application
yarn
```

### Running locally
This template comes with `serverless-offline` package for running serverless application against local setup.

```bash
yarn start
```

### Testing
Following template leverages testing on Jest framework with serverless jest plugin for running tests against serverless handlers.
```bash
yarn test
```

Code below shows example of test for validating health endpoint
```typescript
describe('handler', () => {
  const endpoint = lambdaWrapper.wrap(handler, { handler: 'health' })

  test('returns 200 HTTP', async () => {
    const response = await endpoint.run({})

    expect(response.statusCode).toEqual(StatusCodes.OK)
    expect(response.body).toEqual(ReasonPhrases.OK)
  })
})

```

### Lint
ESLint is used as linter with ready configuration

```bash
yarn lint
```
In order to change ESLint rules please edit `.eslintrc.yml` file

### Deployment

```bash
yarn deploy
```

### Project Structure

```
├── package.json
├── README.md
├── serverless.yml
├── src
│   ├── common.ts
│   ├── foo.ts
│   ├── health.ts
│   └── middleware.ts
├── tests
│   ├── common.test.ts
│   ├── foo.test.ts
│   └── health.test.ts
├── tsconfig.json
└── yarn.lock
```
## License
MIT
