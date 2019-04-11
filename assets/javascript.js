function myMap() {
    var myLatlng = new google.maps.LatLng(40.0583, -74.4057);
    var mapOptions = {
      zoom: 10,
      center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById("map"),mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"New Jersey"
    });
    
    marker.setMap(map);
    }
$(document).ready(function(){

//on click function for searching directions

//generate map




//grab info from google API

//get user location somehow
// var origin = "philadelphia";
// // var destination = $("#destination-input").val();
// var destination = "wildwood";

// // var queryURL = "https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination + "&key=AIzaSyDSIy69ZFze3YohnxsdisMinUBnct886_k";
// var queryURL = "https://maps.googleapis.com/maps/api/directions/json?origin=philadelphia&destination=wildwood&key=AIzaSyDSIy69ZFze3YohnxsdisMinUBnct886_k"

// $.ajax ({
//     url: queryURL,
//     method: "GET"
// }).then(function(response){
//     console.log(response)
// })
})