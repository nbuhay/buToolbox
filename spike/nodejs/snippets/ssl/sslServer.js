#!/usr/bin/env node

var https = require('https');
var fs = require('fs');
var express = require('express');

var options = {
  key: fs.readFileSync( './localhost.key' ),
  cert: fs.readFileSync( './localhost.cert' ),
  requestCert: false,
  rejectUnauthorized: false
};

var app = express();
var port = process.env.PORT || 443;
var server = https.createServer( options, app );

app.use('/', (req, res) => res.send({ msg: 'Hello from SSL!' }));

server.listen( port, function () {
  console.log( 'Express server listening on port ' + server.address().port );
});