const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  var date = Date.now();
  console.log(date + ': Request received by server');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(date + ': Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});