const fs = require('fs');
const aedes = require('aedes');
const tls = require('tls');

const logger = require('pino')({ prettyPrint: true });

const broker = {
  listen: callback => {
    broker.aedes = aedes();

    const opt = {
      key: fs.readFileSync('../certs/privateKey.pem'),
      cert: fs.readFileSync('../certs/public.pem')
    };

    broker.server = tls.createServer(opt, broker.aedes.handle);
    
    broker.server.listen(process.env.PORT);

    logger.info(`Eletronic MQTT Gateway running on port: ${process.env.PORT}`);

    callback();
  },

  setAuth: () => {
    broker.aedes.authenticate = (client, username, password, cb) => {
      try {
        if (!username || !password) throw new Error('Credenciais incompletas')
        if 
      } catch (e) {
        logger.error(e);
      }
  }
}

broker.setAuth = () => {
  broker.aedes.authenticate = (client, username, password, cb) => {
    if()
  }
}