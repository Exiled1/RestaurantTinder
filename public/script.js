/*
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['leftCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
})();
*/

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
		}
	  });

	postRequest.send(requestBody);
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
	document.getElementById("modal-menu").classList.remove("hidden");
	document.getElementById("modal-matched-bar").classList.remove("hidden");

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
	document.getElementById("modal-menu").classList.add("hidden");
	document.getElementById("modal-matched-bar").classList.add("hidden");
}
