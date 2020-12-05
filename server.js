/*****************
 *
 * Restaurant Tinder Server Code.
 *
 ***************/

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');



var app = express();
var port = 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  console.log("CS290 work in project");
  res.status(200);
});

app.use(express.static('public'));

app.get('/', function(req, res) {
    console.log("CS290 work in project");
    res.status(200);
});

app.get('*', function(req, res) {
    console.log("ERROR");
    res.status(404);
});

<<<<<<< HEAD
//Test
=======
app.listen(port, function() {
    console.log("== Server is listening on port", port);
});
>>>>>>> 18ac8b6... Added helper functions, updated package, fixed conflicts on server.js
