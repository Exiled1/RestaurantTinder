/*****************
 *
 * Restaurant Tinder Server Code.
 *
 ***************/

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
const APIHelper = require('./APIHelper');
const latitudeLongitude = [45.409274, -122.722615];
var app = express();
var port = 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/', async function (req, res) {
  // let apiHelper = new APIHelper(latitudeLongitude, 6000);
  //
  // let placesObj = await apiHelper.apiInit();
  console.log("Request received");
  res.status(200).send();

  // res.status(200).render('homepage', {
  //   placesObj: placesObj
  // });
});

app.get('/test', async function (req, res) {

    let apiHelper = new APIHelper(latitudeLongitude, 3000);
    // currently focused on a random albersons
    // with a 3000 mile radius.

    let placesObj = await apiHelper.apiInit(); // this initializes the API Helper methods.

    apiHelper.getRandomRestaurant();
    res.status(200);
});

app.post('/rightRestaurant', async function (req, res)
{
  let apiHelper = new APIHelper(latitudeLongitude, 6000);

  let placesObj = await apiHelper.apiInit();

  // res.status(200).send("Works");

  res.status(200).render('homepage', {    //This should at some point actually make it so that restrauntprofile.handlebars is displayed
    placesObj: placesObj                  //Modification probably needs to be in the homepage.handlebars file
  });
});

app.post('/leftRestaurant', async function (req, res)
{
  let apiHelper = new APIHelper(latitudeLongitude, 6000);

  let placesObj = await apiHelper.apiInit();

  res.status(200).render('homepage', {
    placesObj: placesObj
  });
});

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).send('404');
});;

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});
