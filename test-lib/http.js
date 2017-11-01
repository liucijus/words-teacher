const fetch = require('node-fetch')

module.exports = base => {
  async function get(path) {
    const url = `${base}${path}`
    const response = await fetch(url, {method: 'get'})
    const json = await response.json()

    return {
      status: response.status,
      headers: response.headers,
      json: json
    }
  }

  return {
    get
  }
}
