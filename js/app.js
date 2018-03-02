var lon, lat;
var city;
moment.locale('fr');
$('#date').append(moment().format("<p>" + 'LL' + "</p>"));

$("#buton").click(function() {
    var valinput = $("#text").val();
    console.log(valinput);
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + valinput + '&units=metric&appid=e488227e348fab4707b37ef061ad3c4a',
        dataType: "json",
        success: function(data) {
            console.log(data);
            lon = data.coord.lon;
            lat = data.coord.lat;
            city = data.name;
            
            $('#cadre').html("<li>Temp.max : " + data.main.temp_max + "°</li>")
                .append("<li>Temp.min: " + data.main.temp_min + "°</li>")
                .append("<li>Pres.atmosphérique :" + data.main.pressure + "</li>")
                .append("<li>Vitesse du vent est de :" + data.wind.speed + "km/h</li>")
                .append("<li>Humidité est de " + data.main.humidity + "%</li>")
                .append("<li>La latitude est de : " + lat + "</li>")
                .append("<li>La longitude est de : " + lon + "</li>");
                $('#map').html("<iframe width='100%' heigth='100%' src='https://www.google.com/maps/embed/v1/view?key=AIzaSyBZ-mRs0nlafD2fmwIMcaUyRtQo3G5GvrU&center=" + lat + "," + lon + "&zoom=11&maptype=satellite'></iframe>");
                $('#temp').text( + parseInt(data.main.temp)+ "°");
            
        }
    });
});




/// si je j'entre un mot dans l'input et que je clique sur le bouton valider je veu 
// ajout d'un mécanisme pour refraiche la carte suivant la première recherche
// compatibilité avec les navigateur tous