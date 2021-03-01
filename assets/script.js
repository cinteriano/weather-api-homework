const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "959eaec635msh0aa9076026ebec3p186acajsnf83130465af2",
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});