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
	var reqURL = "/leftRestaurant";
	postRequest.open("POST", reqURL);

	postRequest.addEventListener('load', function (event) {
		if (event.target.status !== 200) {
		  alert("Error storing photo in database: " + event.target.response);
		}
	  });

	postRequest.send();

}

function rightButtonClick() {
	var postRequest = new XMLHttpRequest();
	var reqURL = "/rightRestaurant";
	postRequest.open("POST", reqURL);

	postRequest.addEventListener('load', function (event) {
		if (event.target.status !== 200) {
		  alert("Error storing photo in database: " + event.target.response);
		}
	  });

	postRequest.send();
}