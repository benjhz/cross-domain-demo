var express = require('express');
var app = express();
var serversConfig = require('./../config/servers');
var server1 = serversConfig.server1;
var port = server1.port;

app.use(express.static(__dirname + '/static'));

app.listen(port, function() {
  console.log('server1 listening at http://localhost:%s', port);
});
