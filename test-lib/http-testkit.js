module.exports = ({host = "http://localhost", port}) => {

  console.log(host, port)

  return {
    http: require('../test-lib/http')(`${host}:${port}`),
    matchers: require('../test-lib/response-matchers')
  }
}
