var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/static'));

app.get('/ajax', function(req, res) {
  res.send('ajax data from server1');
});

app.listen(port, function() {
  console.log('server1 listening at http://localhost:%s', port);
});
