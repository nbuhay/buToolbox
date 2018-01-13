# SSL & Node.js

## Description
Add a self-signed SSL certificate to a Node.js app.

## Use Case
* Enable SSL in development environments

## Runbook

Generate the private key and certificate files.
```bash
$ openssl genrsa -out localhost.key 2048
$ openssl req -new -x509 -key localhost.key -out localhost.cert -days 3650 -subj /CN=localhost
```

Install app dependencies.
```bash
$ npm install
```

Run the app.
```bash
$ node sslServer.js &
Express server listening on port 443
```

Test the app using `curl` or `wget`.
```bash
$ curl --insecure https://localhost:443
{"msg":"Hello from SSL!"}
```
```bash
$ wget --no-check-certificate https://localhost:443 && cat index.html
--2018-01-13 22:26:26--  https://localhost/
Resolving localhost (localhost)... 127.0.0.1
Connecting to localhost (localhost)|127.0.0.1|:443... connected.
WARNING: cannot verify localhost's certificate, issued by ‘/CN=localhost’:
  Self-signed certificate encountered.
HTTP request sent, awaiting response... 200 OK
Length: 25 [application/json]
Saving to: ‘index.html’

100%[================================================>] 25          --.-K/s   in 0s

2018-01-13 22:26:26 (583 KB/s) - ‘index.html’ saved [25/25]

{"msg":"Hello from SSL!"}
```
## Reference
* https://www.kevinleary.net/self-signed-trusted-certificates-node-js-express-js