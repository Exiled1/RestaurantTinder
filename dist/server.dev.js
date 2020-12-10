"use strict";

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

var createAPIHelper = require('./APIHelper');

var latitudeLongitude = [45.409274, -122.722615]; //Default value if the user doesn't share their location

var app = express();
var port = 3000; //Setup layout

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars'); //Simple get function using a predefined long and lat
//Renders a page with a completely random restaurant

app.get('/', function _callee(req, res) {
  var apiHelper, places, rdmIdx;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(createAPIHelper(latitudeLongitude, 3000));

        case 2:
          apiHelper = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(apiHelper.apiInit());

        case 5:
          places = _context.sent;
          rdmIdx = Math.floor(Math.random() * places.length);
          res.status(200).render('homepage', {
            restaurant: places[rdmIdx],
            fields: detectFields(places[rdmIdx])
          });
          console.log(places[rdmIdx]);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}); //Test function. Can be removed here soon

app.get('/test', function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          //let apiHelper = await createAPIHelper(latitudeLongitude, 3000);
          //apiHelper.getRandomRestaurant();
          res.status(200).render("homepage");

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //Delete this here soon. Keep it now for testing. Should be gone by tomorrow morning
//Post function called when the user wants more information about the restaurant
// app.post('/rightRestaurant', async function (req, res) {
//     let apiHelper = await createAPIHelper(latitudeLongitude, 3000); // creates an instance of the API Helper class.
//
//     let placesObj = apiHelper.apiDataObject; // this gets the places object.
//
//     res.status(200).render('homepage', { //This should at some point actually make it so that restrauntprofile.handlebars is displayed
//         placesObj: placesObj //Modification probably needs to be in the homepage.handlebars file
//     });
// });
//
// app.post('/leftRestaurant', async function (req, res) {
//     let apiHelper = await createAPIHelper(latitudeLongitude, 3000);
//
//     let placesObj = apiHelper.apiDataObject;
//
//     res.status(200).render('homepage', {
//         placesObj: placesObj
//     });
// });

app.post('/getRestaurant', function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app.use(express["static"]('public')); //Leave this here. I'm getting a 404 if it's any higher up

app.get('*', function (req, res) {
  console.log("== 404 Page Would Be displayed");
  res.status(404).send("404");
});
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});

function detectFields(restaurant) {
  var fields = {
    open: true,
    price: true,
    dineIn: true,
    takeOut: true,
    name: true,
    rating: true,
    totalReviews: true
  };

  if (!restaurant.hasOwnProperty('opening_hours.open_now')) {
    fields.open = false;
  }

  if (!restaurant.hasOwnProperty('price_level')) {
    fields.price = false;
  }

  if (!restaurant.hasOwnProperty('has_dine_in')) {
    fields.dineIn = false;
  }

  if (!restaurant.hasOwnProperty('has_take_out')) {
    fields.takeOut = false;
  }

  if (!restaurant.hasOwnProperty('name')) {
    fields.name = false;
  }

  if (!restaurant.hasOwnProperty('rating')) {
    fields.rating = false;
  }

  if (!restaurant.hasOwnProperty('user_ratings_total')) {
    fields.totalReviews = false;
  }

  return fields;
}