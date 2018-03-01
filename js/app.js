
		moment.locale('fr');	
		$('#date').append(moment().format('LL'));

$("#buton").click(function(){
	var valinput = $("#text").val();
	console.log(valinput);
	if(valinput != ''){
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?q='+ valinput + "&units=metric" + "&appid=e488227e348fab4707b37ef061ad3c4a",
			
			success: function(data){
					console.log(data);
		$('#cadre').html("<p> Le nom de la ville est :" + data.name + "</p>")
	 	.append("<p>l'humidité est de " + data.main.humidity + "</p>")
		.append("<p>La température est de :" + data.main.temp + "</p>")
		.append("<p>La pression atmosphérique est de :" + data.main.pressure + "</p>")
		.append("<p>La température min est de : " + data.main.temp_min + "</p>")
		.append("<p>La température max est de : " + data.main.temp_max + "</p>")
		.append("<p>La latitude est de : " + data.coord.lat + "</p>")
		.append("<p>La longitude est de : " + data.coord.lon + "</p>")
		.append("<p>La vitesse du vent est de :" + data.wind.speed + "</p>") ;
			}
		});

	}else{
		$("#error").html('le champ ne peux pas être vide')
	}
});

var ll= [43.114753,1.6079529999999522]
 var map = L.map('map').setView(ll,15)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 	maxZoom:20
 }).addTo(map);

 //ajout d'un markeur
 var marker = L.marker(ll).addTo(map);

 // ajout d'un popup
 marker.bindPopup("<h3>Pamiers,France</h3>");