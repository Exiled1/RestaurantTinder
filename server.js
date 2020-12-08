/*****************
 *
 * Restaurant Tinder Server Code.
 *
 ***************/

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
const APIHelper = require('./APIHelper');

var app = express();
var port = 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', function (req, res) {
  apiHelper = new APIHelper([45.409274, -122.722615], 6000);

  let placesObj = await apiHelper.apiInit();

  res.status(200).render('homepage', {
    placesObj: placesObj
  });
});

app.get('/test', async function (req, res) {

    let apiHelper = new APIHelper([45.409274, -122.722615], 3000);
    // currently focused on a random albersons
    // with a 3000 mile radius.

    let placesObj = await apiHelper.getNearbyPlaces();
    await apiHelper.apiInit(); // get nearby places grabs the data, it doesn't return anything anymore.

    apiHelper.getRandomRestaurant();
    res.status(200);
});

app.post('/rightRestaurant', function (req, res)
{
  apiHelper = new APIHelper([45.409274, -122.722615], 6000);

  let placesObj = await apiHelper.getNearbyPlaces();

  res.status(200).render('homepage', {
    placesObj: placesObj
  });
});

app.get('*', function(req, res) {
    console.log("== 404 Page Would Be displayed");
    res.status(404);
});
app.listen(port, function() {
    console.log("== Server is listening on port", port);
});
=======
app.listen(port, function() {
    console.log("== Server is listening on port", port);
});
>>>>>>> bd5184b... Added basic .post
=======
>>>>>>> 5f334e24b4f61b6dec693afaad89df1260f11fe5
