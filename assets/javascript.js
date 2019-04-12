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

//on click function for searching directions

$("#destination-searchBtn").on("click", function(){

//grab info from google API

// get user location somehow
var origin = "philadelphia";
// var destination = $("#destination-input").val();
var destination = $("#destination-search").val();
console.log(destination);

var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=philadelphia&destination=" + destination +"&key=AIzaSyDSIy69ZFze3YohnxsdisMinUBnct886_k"
console.log(queryURL);

$.ajax ({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
    console.log(response.routes[0].legs[0].start_location.lat)
    var oriLat = response.routes[0].legs[0].start_location.lat
    var oriLng = response.routes[0].legs[0].start_location.lng
    var desLat = response.routes[0].legs[0].end_location.lat
    var desLng = response.routes[0].legs[0].end_location.lng

    var originCoord = new google.maps.LatLng(oriLat, oriLng)
    var destinationCoord = new google.maps.LatLng(desLat, desLng)
    
    //copied from stackoverflow
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
        markerA = new google.maps.Marker({
          position: pointA,
          title: "point A",
          label: "A",
          map: map
        }),
        markerB = new google.maps.Marker({
          position: pointB,
          title: "point B",
          label: "B",
          map: map
        });
    
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
})
})

