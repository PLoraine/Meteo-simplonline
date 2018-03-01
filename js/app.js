var lon, lat;
var city;
moment.locale('fr');
$('#date').append(moment().format('LL'));

$("#buton").click(function() {
    var valinput = $("#text").val();
    console.log(valinput);
    if (valinput != '') {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + valinput + "&units=metric" + "&appid=e488227e348fab4707b37ef061ad3c4a",

            success: function(data) {
                console.log(data);
                lon = data.coord.lon;
                lat = data.coord.lat;
                city = data.name;
                carte();
                $('#cadre').html("<p> Le nom de la ville est :" + data.name + "</p>")
                    .append("<p>l'humidité est de " + data.main.humidity + "</p>")
                    .append("<p>La température est de :" + data.main.temp + "</p>")
                    .append("<p>La pression atmosphérique est de :" + data.main.pressure + "</p>")
                    .append("<p>La température min est de : " + data.main.temp_min + "</p>")
                    .append("<p>La température max est de : " + data.main.temp_max + "</p>")
                    .append("<p>La latitude est de : " + lat + "</p>")
                    .append("<p>La longitude est de : " + lon + "</p>")
                    .append("<p>La vitesse du vent est de :" + data.wind.speed + "</p>");
            }
        });

    } else {
        $("#error").html('le champ ne peux pas être vide')
    }
});

function carte(){

    console.log(lon, lat)
    var ll = [lat, lon]
    var map = L.map('map').setView(ll, 15)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20
    }).addTo(map);

    //ajout d'un markeur
    var marker = L.marker(ll).addTo(map);

    // ajout d'un popup
    marker.bindPopup(city);
}