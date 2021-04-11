const server = require('./brokerMqtt');

server.listen(process.env.PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log('Server Running on port', process.env.PORT)
})