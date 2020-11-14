# RestaurantTinder

An application to help people decide where they want to eat by randomly recommending them a restaurant

---

# Stuff we will be using in this project:

---

-   Sass/Scss - A CSS extension framework;
    
    > **Reason:** Sass makes CSS a lot more managable and makes it make sense as programmers with things like variables (HUGE), nesting (dope), Partials, Modules, Mixins, Functions (Yeah, that happened bois), **INHERITANCE** and **Extensions** UwU, we get MATH and operators (Dude this is sick, we get to take pixel values and turn them into percentages for responsiveness without bootstrap or shit like that, and it lets us fine tune this shit like bosses)
    
-   **Vue.js** vs React.js **Still debating which one we should use** - These are libraries for building user interfaces, but I'm still on the fence over which one we should use, Vue.js has made a very good comparison for React on their docs site, so I'm figuring that out right now;
    
    > **Reason:** Regardless of which one we pick, a front end user interface framework like react/vue helps us create reusable components that each have their own systems of HTML, CSS, and JS to them, and it lets us apply these systems as we see fit. These JS frameworks will also let us very easily work with incoming data like restaurant data and immediately change our HTML through JS without having to go through any huge hoops to format anything, since we can just create components to display data and style those as we want which is sick because that makes our data reactive. 
    > Another Bonus to these frameworks is that they make working with APIs (Like the Google Places API ;D ) *Incredibly* simple, since React and Vue have ways to format lists of data and display the corresponding info in a pretty nice way. Also, react mauy have this but currently im doing Vue research, but anyways, Vue has a chrome plugin that interacts with the dev console that helps you look at data reaaaally easily without having to use a console or sources or the debug window. 
    > Anyways, that aside, I still need to do more research, but these front end frameworks will reduce the amount of work that we do DRASTICALLY, so it's definitely something we should consider using.
    
-   Google Places API - This API is for sending a query to the google systems and get location data on.
    
    > **Reason:** We need information about nearby restaurants, to do this without spending a million dollars we need an API that gets locations based off of addresses/current locations and gives us the information that we need. This does a shit ton more than I expected, first off, I wanted to use the google places API in combination with the Yelp Developers API, but I discovered some uh, *problems* with this approach:
    
    -   > Firstly, the Yelp Dev API limits the amount of requests you can make, which is a big no for me because I don't want to have to deal with a hacky workaround just to get what we need. The Places API has no such restriction, which is fantastic.
        > 
        > Second, the Yelp API doesn't provide some data that could be useful to use, such as reviews, company website, etc. the company website is a big one, since I would like to provide all the crucial information a user would need
        > 
        > Third, AND MOST IMPORTANT, we also CANT GET REVIEWS FROM THE YELP API... BRUH. 
        > Fourth, it has some minor bugs, and doesn't always work as intended.
        > 
        > Yeah, we're not using Yelp, instead we're using the Places API exclusively for all the data we're going to need.
        
-   MongoDB - This is a database to store info in
    
    > **Reason:** Well, we don't really *need* a database for everything that we need, but since the assignment is telling us to do it, we'll do it \**shrug*.\* If you guys have a database service that you guys are partial to, feel free to bring it up or put it in this channel. But anyways, we could potentially use this to hold previous searches, but I don't know how that would work without making a verified user thing, which requires encryption and that's a lot of work unless we use OAuth and only make this usable through google, or we could make a login with PHP and HTML. (This is obviously something on the backburner and should not take precedence until much later in the development cycle)