const app = require('express')()

const PORT = parseInt(process.argv[2])

app.use('/', require('./lib/words'))

const server = require('http').createServer(app)

function start(port, done) {
  console.log(`Listening on ${port}`)
  server.listen(port, () => done())
}

function stop(done) {
  server.close(() => done())
}

if (require.main === module) {
  start(PORT, () => console.log(`Listening on ${PORT}`))
}

module.exports = {
  start,
  stop
}
