/**
 * This is Rudy's API Helper module, it takes a user's current
 * location and returns all of the nearby data that we need to make the app work.
 * To use my API Helper you just need to await the relevant createAPIHelper function and it'll
 * create an instance of the APIHelper class, from there you can use all the class methods
 * without any trouble. You can also access the apiDataObject from this as well.
 * One thing to watch out for though, is that if you're using this in a function like a middleware
 * function, remember to use the **async** keyword for every function you want to use this in.
 *
 * @param {Number} userLocation - Takes a latitude and longitude, [required].
 * @param {Number} userRadius   - Takes a user radius, in meters. [optional].
 * @example
 * let apiHelper = await createAPIHelper(Latitude_Longitude, Radius_In_Meters);

 * @method **apiInit( )**, **getRandomRestaurant( )**
 * @author **Rudy P.**
 * @field **apiDataObject**
 */

async function createAPIHelper(userLocation, userRadius) {
        /**
         * Contains the APIHelper class. which contains various functions to assist in the manipulation of the API
         * @param {Number} userLocation - Takes a latitude and longitude, [required].
         * @param {Number} userRadius   - Takes a user radius, in meters. [optional].
         * @example
         * let apiHelper = await createAPIHelper(latitudeLongitude, 3000);
         * @methods **apiInit( )**, **getRandomRestaurant( )**
         * @field **apiDataObject**
         */
    class APIHelper {
        apiDataObject; // This data object contains the API data.
        // create a private restaurant list.
        #restaurauntList;

        constructor(userLocation, userRadius) {
            this.#restaurauntList = [];
            this.userLocation = userLocation;
            this.userRadius = userRadius;
        }
        /**
         * This method initializes the API, to call it use the await keyword, since it's an asyncronous function.
         * You only need to call this once. This will return the apiDataObject, however, you can now use different
         *  methods inside the APIHelper class. If you want to access the data without using the
         * API ****(Not recommended)****, just use the apiDataObject field.
         * @example await apiHelper.apiInit();
         */
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

            this.apiDataObject = clientOutput.data.results;
            // console.log(clientOutput); // This is for debug purposes, I'm still not returning anything yet.
            return clientOutput.data.results; // This returns the json object back to where it's called.
        }
        /**
         * Returns a random restaurant
         */
        getRandomRestaurant() {
            console.log("== Class Content");
            console.log(this.apiDataObject);
        }

        // End of class.
    }
    let apiHelper = new APIHelper(userLocation, userRadius);
    await apiHelper.apiInit(); // initialize it.
    return apiHelper; // return it.
}

module.exports = createAPIHelper;
