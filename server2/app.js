var express = require('express');
var app = express();
var port = 3003;

app.use(express.static(__dirname + '/static'));

app.get('/ajax', function(req, res) {
  res.send('ajax data from server2');
});

app.listen(port, function() {
  console.log('server2 listening at http://localhost:%s', port);
});
