const assert = require('assert')
const port = 3334
const baseUri = `http://localhost:${port}`
const get = require('../test-lib/http-testkit')(baseUri)

const server = require('../index')

describe('index', () => {
  before((done) => server.start(port, done))
  after((done) => server.stop(done))

  it('hello', async () => {
    const response = await get('/hello')

    assert.equal(response.status, 200)
  })
})
