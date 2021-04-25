<br>
<br>
<h1 align="center" > Gateway de Eletrônica</h1>
<p align="center"> Gateway de acessos microsserviços Windris</p>
<br>
<br>

# Descrição

O presente serviço é a interface utilizada para comunicação entre o software embarcado das estações Windris e o backend do subsistema de Software.

Este serviço é implementado em NodeJS, utiliza o [Broker MQTT Aedes](https://www.npmjs.com/package/aedes) e requer a criação de chaves públicas e privadas, pois está configurado para o uso de TLS. 

Para gerar certificados de chave pública e privada utilize o seguinte código.
```
openssl genpkey -algorithm RSA -des3 -out certs/privateKey.pem -pkeyopt rsa_keygen_bits:4096
openssl req -new -key certs/privateKey.pem -out csr.pem
openssl x509 -in csr.pem -out publicKey.pem -req -signkey privateKey.pem -days 365
```
