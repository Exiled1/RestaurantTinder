/*****************
 *
 * Restaurant Tinder Server Code.
 *
 * Authors: Zach E., Stuart A., Rudy P.
 ***************/

//Setting up variables
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
var locData = require('./locationData');
const createAPIHelper = require('./APIHelper');
var latitudeLongitude = [45.409274, -122.722615]; //Default value if the user doesn't share their location
var app = express();
var port = 3000;


//Setup layout
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());

//Simple get function using a predefined long and lat
//Renders a page with a completely random restaurant
app.get('/', async function (req, res) {
    let apiHelper = await createAPIHelper(latitudeLongitude, 3000);

    let places = apiHelper.apiDataObject;

    var rdmIdx = Math.floor(Math.random() * places.length);

    res.status(200).render('homepage', {
      restaurant: places[rdmIdx],
      fields: detectFields(places[rdmIdx])
    });
});

//Test function. Can be removed here soon
app.get('/test', async function (req, res) {


    let apiHelper = await createAPIHelper(latitudeLongitude, 3000);
    apiHelper.getRandomRestaurant();

    res.status(200).render("homepage");
});

app.post('/getRestaurant', async function (req, res, next) {
  if(!req.body.longLat)
  {
    res.status(400).send('Request body must contain longitude and latitude');
  }

  var longLat = req.body.longLat;

  let places = await loadRestaurants(longLat, res);

  var rdmIdx = Math.floor(Math.random() * places.length);

  // console.log(places[rdmIdx]);

  var data = {
    restaurant: places[rdmIdx],
    fields: detectFields(places[rdmIdx])
  };

  res.status(200).send(JSON.stringify(data, null, 2));
});

app.use(express.static('public')); //Leave this here. I'm getting a 404 if it's any higher up

app.get('*', function (req, res) {
    console.log("== 404 Page Would Be displayed");
    res.status(404).send("404");
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});

function detectFields(restaurant)
{
  var fields = {
    open: true,
    price: true,
    dineIn: true,
    takeOut: true,
    name: true,
    rating: true,
    totalReviews: true,
  }

  if(!restaurant.hasOwnProperty('opening_hours.open_now'))
  {
    fields.open = false;
  }
  if(!restaurant.hasOwnProperty('price_level'))
  {
    fields.price = false;
  }
  if(!restaurant.hasOwnProperty('has_dine_in'))
  {
    fields.dineIn = false;
  }
  if(!restaurant.hasOwnProperty('has_take_out'))
  {
    fields.takeOut = false;
  }
  if(!restaurant.hasOwnProperty('name'))
  {
    fields.name = false;
  }
  if(!restaurant.hasOwnProperty('rating'))
  {
    fields.rating = false;
  }
  if(!restaurant.hasOwnProperty('user_ratings_total'))
  {
    fields.totalReviews = false;
  }

  return fields;
}

async function loadRestaurants(longLat, res)
{
  var pos = longLat[0] + "," + longLat[1];
  // var pos = "145.409274,122.722615";
  //
  // longLat = [145.409274, 122.722615]

  let apiHelper = await createAPIHelper(longLat, 3000);

  let places = await apiHelper.apiDataObject;
  // console.log('locData: ', locData);
  if(locData[pos])
  {
    console.log("This location already exists");
    places = locData[pos];
  }
  else
  {
    // locData.push({
    //   [pos]: places
    // });
    locData[pos] = places;

    fs.writeFile(
      __dirname + '/locationData.json',
      JSON.stringify(locData, null, 2),
      function (err, data) {
        if(err)
        {
          console.log("  -- err:", err);
          console.log("Error saving location to DB");
        }
        else
        {
          console.log("Location saved to DB");
        }
      }
    )
  }
  return places;
}
