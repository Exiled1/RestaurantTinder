/*****************
 *
 * Restaurant Tinder Server Code.
 *
 ***************/

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
const createAPIHelper = require('./APIHelper');
const latitudeLongitude = [45.409274, -122.722615];
var app = express();
var port = 3000;



app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/', async function (req, res) {
    let apiHelper = await createAPIHelper(latitudeLongitude, 3000);
    apiHelper.getRandomRestaurant();

    console.log("Call to /");

    res.status(200).render('homepage', apiHelper.apiInit());
});

app.get('/test', async function (req, res) {

    let apiHelper = await createAPIHelper(latitudeLongitude, 3000);
    apiHelper.getRandomRestaurant();

    res.status(200);
});

app.post('/rightRestaurant', async function (req, res) {
    let apiHelper = await createAPIHelper(latitudeLongitude, 3000); // creates an instance of the API Helper class.

    let placesObj = apiHelper.apiDataObject; // this gets the places object.

    res.status(200).render('homepage', { //This should at some point actually make it so that restrauntprofile.handlebars is displayed
        placesObj: placesObj //Modification probably needs to be in the homepage.handlebars file
    });
});

app.post('/leftRestaurant', async function (req, res) {
    let apiHelper = await createAPIHelper(latitudeLongitude, 3000);

    let placesObj = apiHelper.apiDataObject;

    res.status(200).render('homepage', {
        placesObj: placesObj
    });
});

app.use(express.static('public')); //Leave this here. I'm getting a 404 if it's any higher up

app.get('*', function (req, res) {
    console.log("== 404 Page Would Be displayed");
    res.status(404);
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});
