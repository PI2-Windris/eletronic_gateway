# eletronic_gateway


Gerar certificados de chave pública e privada
```
openssl genpkey -algorithm RSA -des3 -out certs/privateKey.pem -pkeyopt rsa_keygen_bits:4096
openssl req -new -key certs/privateKey.pem -out csr.pem
openssl x509 -in csr.pem -out publicKey.pem -req -signkey privateKey.pem -days 365
```
