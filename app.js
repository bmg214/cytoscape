let express = require('express');
let http = require('http');
let path = require('path');
let ejs = require('ejs');

let app = express();
app.set('views', __dirname + '/views');

app.engine('html',ejs.__express) ; 
app.set('view engine', 'html');	// 替换：app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
   res.render('index', {});
})
 
var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port 
  console.log('Express server listening on port ' + port);
})