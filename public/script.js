/*
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['leftCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
})();
*/

document.getElementById("left-button").addEventListener("click", leftButtonClick);
document.getElementById("right-button").addEventListener("click", rightButtonClick);


function leftButtonClick() {
	var postRequest = new XMLHttpRequest();
	var reqURL = "/getRestaurant";
	postRequest.open("POST", reqURL);

  var reqBody = JSON.stringify({
      longLat: [45.409274, -122.722615]
    });

  postRequest.setRequestHeader('Content-Type', 'application/json');
	postRequest.addEventListener('load', function (event) {
		if (event.target.status !== 200) {
		  alert("Error storing photo in database: " + event.target.response);
		}
	  });

	postRequest.send(reqBody);
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
