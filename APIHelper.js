
/**
 * This is Rudy's API Helper module, it takes a user's current
 * location and returns all of the nearby data that we need to make the app work.
 * To use this class you need to first create an **APIHelper** instance and assign it to a variable.
 * To initialize the Google API, you must use the **await** method with **apiInit**, after you use the apiInit() function,
 * you can then access the rest of the class methods as normal.
 * @example
 * let apiHelper = new APIHelper([lat,lng], UserRadius);
 * await apiHelper.apiInit();
 * @method **apiInit**
 * @method **getRandomRestaurant**
 * @author **Rudy P.**
 * @field **apiDataObject**
 */
async class APIHelper {
    apiDataObject; // This data object contains the API data.


    /**
     *
     * @param {Number} userLocation - Takes a latitude and longitude, [required].
     * @param {Number} userRadius   - Takes a user radius, in meters. [optional].
     */
    constructor(userLocation, userRadius) {
        this.userLocation = userLocation;
        this.userRadius = userRadius;
    }

    async apiInit() {

        if (process.env.NODE_ENV !== 'production') {
            // Checks the node environment, if it's not the production server, it won't require this configuration since we shouldn't be using a .env file in a production app, just during development.
            require('dotenv').config();
            // Don't remove this from here if you're deploying., this is required to make the API key work.
        }

        const {
            Client,
            defaultAxiosInstance
        } = require("@googlemaps/google-maps-services-js"); // Initializing the client and an axios instance.

        const client = new Client({}); // Google API Client should be private per instance that I use it.
        this.userLocation = [45.409274, -122.722615]
        // Set as the default for testing purposes, points to an area that has a lot of food places nearby it. TODO: Remove this later.

        // Oh, also, for future research, the pageToken parameter has some promise.
        let clientOutput = await client.placesNearby({
                    params: {
                        location: this.userLocation,
                        radius: this.userRadius,
                        type: "food", // play around with this parameter, because it may not get back every specific restaurant that I need, especially if it's not called a restaurant.
                        key: process.env.GOOGLE_MAPS_API_KEY
                    },
                    timeout: 2000 // milliseconds to wait for the request, otherwise, send an error.
                },
                defaultAxiosInstance // I still dunno what an axios instance is, but the API needs it.
            )
            .catch(error => {
                // if there's an error, catch the error and throw it.
                console.log(error);
                throw error;
            });

        this.#apiDataObject = clientOutput.data.results;
        // console.log(clientOutput); // This is for debug purposes, I'm still not returning anything yet.
        //return clientOutput.data.results; // This returns the json object back to where it's called.
    }

    getRandomRestaurant(){
        console.log("== Class Content");
        console.log(this.#apiDataObject);
    }

    // End of class.
}



module.exports = APIHelper;
