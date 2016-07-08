var express = require('express');
var app = express();
var serversConfig = require('./../config/servers');
var server1 = serversConfig.server1;
var server2 = serversConfig.server2;
var port = server2.port;
var server1Origin = "http://localhost:" + server1.port;

app.use(express.static(__dirname + '/static'));

//方式一： 跨域资源共享 (CORS)
app.get('/cors', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', server1Origin);
  res.setHeader('Access-Control-Allow-Credentials', true); //允许发送cookie
  res.send('data from server2(CORS)');
});

//方式二： JSONP
app.get('/jsonp', function(req, res) {
  var callbackName = req.query.callback;
  var resText = callbackName + '("' + 'data from server2(JSONP)' +'")';
  res.send(resText);
});

app.listen(port, function() {
  console.log('server2 listening at http://localhost:%s', port);
});
