var express = require('express');
var app = express();
var port = 3003;
var server1Origin = "http://localhost:3000";

app.use(express.static(__dirname + '/static'));

app.get('/foo', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', server1Origin);
  res.setHeader('Access-Control-Allow-Credentials', true); //允许发送cookie
  res.send('data from server2');
});

app.listen(port, function() {
  console.log('server2 listening at http://localhost:%s', port);
});
