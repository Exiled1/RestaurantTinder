/**
 * This is Rudy's API Helper module, it takes a user's current location and returns all of the nearby data that we need to make the app work.
 */
const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client({}); // Google API Client should be private per instance that I use it.
client.placesNearby(
    {
        params: {

        }
    }
);


module.exports = APIHelper;