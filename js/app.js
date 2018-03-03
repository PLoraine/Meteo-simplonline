var lon, lat;
var city;
var map;
moment.locale('fr');
$('#date').append(moment().format("<p>"+'LL'+"</p>"));
$("#buton").click(function() {
    var valinput = $("#text").val();
    console.log(valinput);
    
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + valinput + '&units=metric&appid=e488227e348fab4707b37ef061ad3c4a',
            dataType:"json", 
            success: function(data) {
                console.log(data);
                lon = data.coord.lon;
                lat = data.coord.lat;
                city = data.name;
                if (map != undefined || map!= null){
                    map.remove();
                    map=L.map('map')
                    carte(map)
                }else{
                    map = L.map('map');
                    carte(map);

                }

                $('#cadre').html( data.main.temp)
                    $('#temp_max').text( data.main.temp_max + "°")
                    $('#temp_min').text(data.main.temp_min + "°")
                    $('#press-at').text(data.main.pressure)
                    $('#vit-vent').text(data.wind.speed + "km/h")
                    $('#humidite').text( data.main.humidity + "%")
                    $('#lon').text(lat)
                    $('#lat').text(lon)
                    
            }
        });
});

function carte(map){

    console.log(lon, lat)
    var ll = [lat, lon]
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20
    }).addTo(map.setView(ll, 13));

    //ajout d'un markeur
    var marker = L.marker(ll).addTo(map);

    // ajout d'un popup
    marker.bindPopup(city);
}
// ajout d'un mécanisme pour refraiche la carte suivant la première recherche
// compatibilité avec les navigateur tous