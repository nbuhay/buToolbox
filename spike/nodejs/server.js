const http = require('http')
    , os = require('os')
    , port = 3000
    , hostname = os.hostname()

const server = http.createServer((req, res) => {
  let date = new Date()
    , client = req.connection.remoteAddress
  
  console.log(`${date}: hostname ${hostname}: client ${req.connection.remoteAddress}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  resPayload = {
    "date": date,
    "hostname": hostname,
    "client": client,
    "msg": "Hello World from Node.js server!"
  };
  res.end(JSON.stringify(resPayload));
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});