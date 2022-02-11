var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.post("/", function(req, res) {  
   console.log(JSON.stringify(req.body, 0, 2)); 
   res.status(200).send(req.body);
  })



app.listen(3000, function () {
  console.log('WELCOME POC listening on port 3000!');
});
