/*
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['leftCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
})();
*/

//const { render } = require("sass");

var latitude = 0;
var longitude = 0;


document.getElementById("left-button").addEventListener("click", leftButtonClick);
document.getElementById("right-button").addEventListener("click", rightButtonClick);



navigator.geolocation.getCurrentPosition(positionRetrieved, positionError);

function leftButtonClick() {
	var postRequest = new XMLHttpRequest();
	var reqURL = "/getRestaurant";
	postRequest.open("POST", reqURL);

	navigator.geolocation.getCurrentPosition(positionRetrieved, positionError);
	
	var requestBody = JSON.stringify({
		"longLat" : [latitude, longitude]
	});

	postRequest.setRequestHeader("Content-Type", "application/json");
	postRequest.addEventListener('load', function (event) {
		if (event.target.status !== 200) {
		  alert("Could not load page: " + event.target.response);
		} else {
			let serverResponse = JSON.parse(event.target.response);
			console.log(serverResponse);
			document.getElementById("left-card-container").remove();
			document.getElementById("right-card-container").remove();
			document.getElementById("modal-background").remove();

			newLeftCard(serverResponse);
			newRightCard(serverResponse);
			newRestaurantProfile(serverResponse);
		}
	});

	postRequest.send(requestBody);
}

function newRestaurantProfile(response) {
	var fields = response.fields;
	var restaurant = response.restaurant;

	var newProfile = document.createElement("div");
	newProfile.classList.add("hidden");
	newProfile.setAttribute("id", "modal-background");

	var newMenu = document.createElement("div");
	newMenu.setAttribute("id", "modal-menu");

	var newbtn = document.createElement("button");
	newbtn.setAttribute("id", "modal-close-button");
	newbtn.textContent = "x";
	newMenu.appendChild(newbtn);

	if(fields.name) {
		var nameDiv = document.createElement("div");
		nameDiv.textContent = restaurant.name;
		newMenu.appendChild(nameDiv);
	}
	if(fields.rating) {
		var ratingDiv = document.createElement("div");
		ratingDiv.textContent = "Rating: " + restaurant.rating;
		newMenu.appendChild(ratingDiv);
	}
	if(fields.totalReviews) {
		var numReviewsDiv = document.createElement("div");
		numReviewsDiv.textContent = "Total Reviews: " + restaurant.user_ratings_total;
		newMenu.appendChild(numReviewsDiv);
	}
	if(fields.open) {
		var hoursDiv = document.createElement("div");
		hoursDiv.textContent = restaurant.opening_hours.open_now;
		newMenu.appendChild(hoursDiv);
	}
	if(fields.price) {
		var priceDiv = document.createElement("div");
		priceDiv.textContent = "Pricing: " + restaurant.price_level;
		newMenu.appendChild(priceDiv);
	}
	if(fields.dineIn) {
		var dineInDiv = document.createElement("div");
		dineInDiv.textContent = "Dine in";
		newMenu.appendChild(dinInDiv);
	}
	if(fields.takeOut) {
		var takeOutDiv = document.createElement("div");
		takeOutDiv.textContent = "Take Out";
		newMenu.appendChild(takeOutDiv);
	}

	var matchedBar = document.createElement("div");
	matchedBar.setAttribute("id","modal-matched-bar");
	matchedBar.textContent = "It's a Match!!";

	newProfile.appendChild(newMenu);

	document.body.appendChild(newProfile);
}

function newLeftCard(response) {
	var fields = response.fields;
	var restaurant = response.restaurant;

	var newLeftCardContainer = document.createElement("div");
	newLeftCardContainer.classList.add("card-container");
	newLeftCardContainer.setAttribute("id", "left-card-container");

	if(fields.name) {
		var nameDiv = document.createElement("div");
		nameDiv.textContent = restaurant.name;
		newLeftCardContainer.appendChild(nameDiv);
	}
	if(fields.rating) {
		var ratingDiv = document.createElement("div");
		ratingDiv.textContent = "Rating: " + restaurant.rating;
		newLeftCardContainer.appendChild(ratingDiv);
	}
	if(fields.totalReviews) {
		var numReviewsDiv = document.createElement("div");
		numReviewsDiv.textContent = "Total Reviews: " + restaurant.user_ratings_total;
		newLeftCardContainer.appendChild(numReviewsDiv);
	}

	document.getElementById("card-content-container").appendChild(newLeftCardContainer);
}

function newRightCard(response) {
	var fields = response.fields;
	var restaurant = response.restaurant;

	var newRightCardContainer = document.createElement("div");
	newRightCardContainer.classList.add("card-container");
	newRightCardContainer.setAttribute("id", "right-card-container");

	if(fields.open) {
		var hoursDiv = document.createElement("div");
		hoursDiv.textContent = restaurant.opening_hours.open_now;
		newRightCardContainer.appendChild(hoursDiv);
	}
	if(fields.price) {
		var priceDiv = document.createElement("div");
		priceDiv.textContent = "Pricing: " + restaurant.price_level;
		newRightCardContainer.appendChild(priceDiv);
	}
	if(fields.dineIn) {
		var dineInDiv = document.createElement("div");
		dineInDiv.textContent = "Dine in";
		newRightCardContainer.appendChild(dinInDiv);
	}
	if(fields.takeOut) {
		var takeOutDiv = document.createElement("div");
		takeOutDiv.textContent = "Take Out";
		newRightCardContainer.appendChild(takeOutDiv);
	}

	document.getElementById("card-content-container").appendChild(newRightCardContainer);
}

function positionRetrieved(position) {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
}

function positionError(error) {
	console.warn(`Unable to retrieve your location, ERROR(${err.code}): ${err.message}`);
}

function rightButtonClick() {
	document.getElementById("modal-background").classList.remove("hidden");

	document.getElementById("modal-close-button").addEventListener("click", hideModal);
	document.addEventListener('keydown',
		function (event) {
			console.log(event.key);
			if(event.key == "Escape") {
				hideModal();
			}
		}
	);
}

function hideModal() {
	document.getElementById("modal-background").classList.add("hidden");
}