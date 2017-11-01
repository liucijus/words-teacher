const server = require('../index')

function givenServerBeforeAndAfter(port) {
  before((done) => server.start(port, done))
  after((done) => server.stop(done))
}

module.exports = {givenServerBeforeAndAfter}
