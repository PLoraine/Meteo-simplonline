//console.log("hello");

// requête AJAX en jquery 
$.ajax({
	url : 'http://api.openweathermap.org/data/2.5/weather?q=Pamiers&lang=fr&units=metric&appid=e488227e348fab4707b37ef061ad3c4a',
	success : function(data){
		console.log(data);
		console.log(data.main);
		console.log("Humidité est de :" + data.main.humidity);
		console.log("La température est de :" + data.main.temp);
		console.log("La pression atmosphérique est de :" + data.main.pressure);
		console.log("La température min est de : " + data.main.temp_min);
		console.log("La température max est de : " + data.main.temp_max);
		console.log(data.coord);
		console.log("La latitude est de : " + data.coord.lat);
		console.log("La longitude est de : " + data.coord.lon);
	}

});
