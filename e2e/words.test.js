const givenServerBeforeAndAfter = require('../test-lib/test-server').givenServerBeforeAndAfter

const port = 3334
const {
  http: {get},
  matchers: {isSuccessful}
} = require('../test-lib/http-testkit')({port: port})

describe('words', () => {
  givenServerBeforeAndAfter(port)

  it('returns empty result if there are no words in db', async () => {
    const response = await get('/words')

    isSuccessful(response).withJson({words: []})
  })

})

