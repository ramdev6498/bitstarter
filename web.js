var express = require('express');

var app = express.createServer()
.use(express.logger())
.use(express.static(__dirname + '/bootstrap'))
.use(express.static(__dirname + '/css'))
.use(express.static(__dirname + '/extlinks'));

app.get('/', function(request, response) {
  var fs=require('fs');
var buf= new Buffer( fs.readFileSync('index.html','utf-8'));
  response.send(buf.toString());

});
app.get('/extlinks', function(req, res) {
 var fs=require('fs');
var buffer = fs.readFileSync('contact.html', 'utf-8');
  response.send(buffer);
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
