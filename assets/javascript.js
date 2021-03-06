//Make map centered on New Jersey on page load
function myMap() {
  var myLatlng = new google.maps.LatLng(40.0583, -74.4057);
  var mapOptions = {
    zoom: 10,
    center: myLatlng
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"New Jersey"
  });
  
  marker.setMap(map);
  }

$(document).ready(function(){

  //establish destination variable used in search functions 
  var destination;

  //on click function for searching directions and finding
  $("#destination-searchBtn").on("click", function(){
    event.preventDefault();

    //array for map markers
    var markers = [];
    var markersCoor = [];

    destination = $("#destination-search").val();

  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=hotel&location=" + destination + "%20New%20Jersey";
  console.log(queryURL);
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": queryURL,
      "method": "GET",
      "headers": {
        "Authorization": "Bearer b9Q7iP06Vu5-C_rzcbrIER4xuHcRcjdApNvPwaNWV940F-CDDwthU3038L4ssbtffIgSvOY7Ow3ROAVrOKHMP5Yt5mrC169Yg4wC-SS_Abu9_KlLgYdTS7sj3C6uXHYx",
        "cache-control": "no-cache",
        "Postman-Token": "52ca0037-2032-418f-a1fc-e639ca18ccd4"
      }
    }
  
  $.ajax(settings).then(function(response){
    console.log(response);
    $("#yelp").empty();
    for (i = 0; i < 10; i++) {
      
      var newMarkerCoor = new google.maps.LatLng(response.businesses[i].coordinates.latitude, response.businesses[i].coordinates.longitude);
      
      markersCoor.push(newMarkerCoor);
      markers.push(i);
      console.log(markers);
      var newDiv = $("<div>");
      newDiv.addClass("child");
      newDiv.append("<div class='textGroup'><a href='" + response.businesses[i].url + "'>Hotel: " + response.businesses[i].name + "</a><br>Rating: " + response.businesses[i].rating + "<br>Cost: " + response.businesses[i].price + "</div>" + "<img style='height:100px;width:150px;' src=" + response.businesses[i].image_url + ">");
      $("#yelp").append(newDiv);
    }
  })
    
    //grab info from google API    
    // get user location
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
      var oriLat = position.coords.latitude
      var oriLng = position.coords.longitude
      var originCoord = new google.maps.LatLng(oriLat, oriLng);
    

      var origin = oriLat + "," + oriLng;
      console.log(destination);

      var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination + "%20New%20Jersey&key=AIzaSyDSIy69ZFze3YohnxsdisMinUBnct886_k"
      console.log(queryURL);

        $.ajax ({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            
            var desLat = response.routes[0].legs[0].end_location.lat
            var desLng = response.routes[0].legs[0].end_location.lng

            var destinationCoord = new google.maps.LatLng(desLat, desLng)
            
            //new map with directions on it
            function initMap() {
              var pointA = originCoord
                pointB = destinationCoord
                myOptions = {
                  zoom: 7,
                  center: pointA
                },
                map = new google.maps.Map(document.getElementById('map'), myOptions),
                // Instantiate a directions service.
                directionsService = new google.maps.DirectionsService,
                directionsDisplay = new google.maps.DirectionsRenderer({
                  map: map
                }),
                
                markerB = new google.maps.Marker({
                  position: pointB,
                  title: "point B",
                  label: "B",
                  map: map
                });

                for (i = 0; i < 10; i++){
                  markers[i] = new google.maps.Marker({
                    position: markersCoor[i],
                    title: "Hotel " + (i + 1),
                    label: "H" + (i + 1),
                    map: map
                  })
                }
            
              // get route from A to B
              calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);
            

              
            }
             
            function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
              directionsService.route({
                origin: pointA,
                destination: pointB,
                travelMode: google.maps.TravelMode.DRIVING
              }, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                  directionsDisplay.setDirections(response);
                } else {
                  window.alert('Directions request failed due to ' + status);
                }
              });
            }
            initMap();
          
        })
    }
//Weather req on same click
  
      //make var newzip by taking in weather-input
  
      var queryURL = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" + destination + ",us&appid=7a1b3403d3345a747633446a6905bb5e";
  
      $.ajax({
          url: queryURL,
          method: "GET"
      }).then(function (response) {
  
          var img_url = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
          var newimg = $("<img>");
          var kelvin = response.main.temp;
          var farenheit = Math.floor((kelvin - 273.15) * (9 / 5) + 32);
          newimg.attr("src", img_url);
          newimg.attr("alt", "weather image")
          $("#search").empty();
  
          $("#search").html("<img src='" + img_url + " ' />" + farenheit + " F");
          $("#search").append("<p>" + response.name + ": " + response.weather[0].description + "</p>");
      });

//Yelp API call under same on click

  //retaurant search
  $("#restaurant-searchBtn").on("click", function(){
    var resInput = $("#restaurant-search").val();
    console.log(resInput);
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurant%20" + resInput + "&location=" + destination + "%20New%20Jersey";
    console.log(queryURL);
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": queryURL,
      "method": "GET",
      "headers": {
        "Authorization": "Bearer b9Q7iP06Vu5-C_rzcbrIER4xuHcRcjdApNvPwaNWV940F-CDDwthU3038L4ssbtffIgSvOY7Ow3ROAVrOKHMP5Yt5mrC169Yg4wC-SS_Abu9_KlLgYdTS7sj3C6uXHYx",
        "cache-control": "no-cache",
        "Postman-Token": "52ca0037-2032-418f-a1fc-e639ca18ccd4"
      }
    }
  
  $.ajax(settings).then(function(response){
    console.log(response);
    $("#yelpRes").empty();
    for (i = 0; i < 10; i++) {
      console.log(i);
      var newDiv = $("<div>");
      newDiv.addClass("child");
      newDiv.append("<div class='textGroup'><a href='" + response.businesses[i].url + "'>Restaurant: " + response.businesses[i].name + "</a><br>Rating: " + response.businesses[i].rating + "<br>Cost: " + response.businesses[i].price + "</div>" +"<img style='height:100px;width:150px;' src=" + response.businesses[i].image_url + ">"+"</div>");
      console.log(newDiv);
      $("#yelpRes").append(newDiv);
      
    }
  })
})
  })
  //Pauly D Smacker
          // Initialize Firebase
          var config = {
            apiKey: "AIzaSyD1zlb07ZRZLvTDjEHtqncswpD5_ISELl8",
            authDomain: "newproj-f2b5e.firebaseapp.com",
            databaseURL: "https://newproj-f2b5e.firebaseio.com",
            projectId: "newproj-f2b5e",
            storageBucket: "newproj-f2b5e.appspot.com",
            messagingSenderId: "122407998082"
          };
          firebase.initializeApp(config);

        var database = firebase.database();

        var paulCounter = 0;
        var snookieCounter = 0;
        var mikeCounter = 0;

        $("#paul").on("click", function () {
            paulCounter++;
            database.ref().update({
                paul: paulCounter
            });
        });

        $("#snooki").on("click", function () {
            snookieCounter++;
            database.ref().update({
                snookie: snookieCounter
            });
        });

        $("#mike").on("click", function () {
            mikeCounter++;
            database.ref().update({
                mike: mikeCounter
            });
        });

        // Main Process
        database.ref().on("value", function (snapshot) {
            console.log(snapshot.val());
            paulCounter = snapshot.val().paul;
            $("#click-here").text(snapshot.val().paul);

            snookieCounter = snapshot.val().snookie;
            $("#click-here1").text(snapshot.val().snookie);

            mikeCounter = snapshot.val().mike;
            $("#click-here2").text(snapshot.val().mike);
        }, function (errorObject) {
            console.log("The read failed:" + errorObject.code)
        });

        
})