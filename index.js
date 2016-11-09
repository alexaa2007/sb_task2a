var cors = require('cors');
var express = require('express');

var app = express();
app.use(cors());

app.get('/', function (req, res) {
  const a = +req.query.a || 0;
  const b = +req.query.b || 0;
  const result = a + b;
  console.log(result);
  res.send(String(result));
});

app.listen(3001, function() {
  console.log('Listening on 3001 port.');
});
