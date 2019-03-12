const http = require('http')
    , os = require('os')
    , port = 3000
    , hostname = os.hostname()

const server = http.createServer((req, res) => {
  var date = new Date();
  console.log(date + ': Request received by server');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Date:     ${date}\n` +
          `Hostname: ${hostname}\n` +
          `Message:  Hello World from Node.js server!`);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});