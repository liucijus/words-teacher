const assert = require('assert')

function isSuccessful({status, headers, json}) {
  assert.equal(status, 200, `Status is not 200, but ${status}`)

  function findContentType() {
    return headers.get('content-type')
  }

  function isJson(contentType) {
    return contentType ? contentType.includes('application/json') : false
  }

  function withJson(body) {
    const contentType = findContentType()
    assert(isJson(contentType), `Expected JSON response, got ${contentType}`)
    assert.deepEqual(json, body, `Expected ${JSON.stringify(body)}, but was ${JSON.stringify(json)}`)
    return build
  }

  const build = {
    withJson
  }

  return build
}

module.exports = {isSuccessful}
