const port = 3334
const {
  http: {get},
  matchers: {isSuccessful}
} = require('../test-lib/http-testkit')({port: port})
const server = require('../index')

describe('words', () => {
  before((done) => server.start(port, done))
  after((done) => server.stop(done))

  it('returns empty result if there are no words in db', async () => {
    const response = await get('/words')

    isSuccessful(response).withJson({words: []})
  })

})

