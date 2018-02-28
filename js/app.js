//console.log("hello");

// requête AJAX en jquery 
$.ajax({
	url : 'http://api.openweathermap.org/data/2.5/weather?q=Pamiers&lang=fr&units=metric&appid=e488227e348fab4707b37ef061ad3c4a',
	 success : function(data){
		//console.log(data);
		$('#cadre').append("Le nom de la ville est :" + data.name);
	 	$('#cadre').append("l'humidité est de " + data.main.humidity);
		$('#cadre').append("La température est de :" + data.main.temp);
		$('#cadre').append("La pression atmosphérique est de :" + data.main.pressure);
		$('#cadre').append("La température min est de : " + data.main.temp_min);
		$('#cadre').append("La température max est de : " + data.main.temp_max);
		$('#cadre').append("La latitude est de : " + data.coord.lat);
		$('#cadre').append("La longitude est de : " + data.coord.lon);
		$('#cadre').append("La vitesse du vent est de :" + data.wind.speed);
	}

});
		moment.locale('fr');	
		$('#date').append(moment().format('LL'));

$("#buton").click(function(){
	var valinput = $("#text").val();
	console.log(valinput);
});