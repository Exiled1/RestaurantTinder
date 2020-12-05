const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client({}); // Google API Client should be private per instance that I use it.
client.placesNearby(
    {
        params: {
            
        }
    }
);


module.exports = APIHelper;