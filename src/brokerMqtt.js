const fs = require('fs')
const path = require('path')
const aedes = require('aedes')()
const logger = require('pino')({ prettyPrint: true })

const options = {
  key: fs.readFileSync(path.join(__dirname, '../certs/privateKey.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../certs/publicKey.pem'))
}

const server = require('tls').createServer(options, aedes.handle)

module.exports = server;