// Rickbranch

/// https://apidojo-booking-v1.p.rapidapi.com/properties/get-rooms?languagecode=en-us&travel_purpose=leisure&rec_children_qty=1%2C1&rec_children_age=5%2C7&recommend_for=3&departure_date=2019-03-15&rec_guest_qty=2%2C2&hotel_id=1720410&arrival_date=2019-03-13


var hotels = ["hotel0", "hotel1", "hotel2"];
$("#destination-searchBtn").on("click", function (event) {
    event.preventDefault();
    var destinationsearch = $("#destination-search").val().trim()
    var queryURL = "https://cors-anywhere.herokuapp.com/https://apidojo-booking-v1.p.rapidapi.com/properties/list?city=Wildwood&api_key=07842ba08amsh10928a0da77fed7p158c6djsnca8ead5dd506"
    $.ajax({
        // + destinationsearch 
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })
})

// function populateImage(src, container) {

//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         }).then(function (response) {
//             console.log(response)


//         })

    // $("#add-location").on("click", function (event) {

    //     event.preventDefault();

    //     var location = $("#location-input").val().trim();

    //     location.push(location);

    //     renderImage(location);

    //     function {
    //         $("#locations").empty();

    //         var location = locations[i]
    //         $("#locations").append("<img>" + location + "</img>")

    //     }
    //     function renderImage(location) {
    //         var queryURL = "apidojo-booking-v1.p.rapidapi.com" + location + "&api_key=dc6zaTOxFJmzC&limit=10";
    //         $.ajax({
    //             url: queryURL,
    //             method: "GET"

    //         }).then(function (response) {
    //             $("#hotels-appear-here").empty()



    //                 < script src = "https://code.jquery.com/jquery-3.3.1.min.js"
    //             integrity = "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin = "anonymous" ></script >

    //                 <script src="assets/javascript.js"></script>

    //             //Will branch
    //             function myMap() {
    //                 var myLatlng = new google.maps.LatLng(40.0583, -74.4057);
    //                 var mapOptions = {
    //                     zoom: 10,
    //                     center: myLatlng
    //                 };
    //                 var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //                 var marker = new google.maps.Marker({
    //                     position: myLatlng,
    //                     title: "New Jersey"
    //                 });

    //                 marker.setMap(map);
    //             }
    //             $(document).ready(function () {

    //                 //on click function for searching directions

    //                 //generate map




    //                 //grab info from google API

    //                 //get user location somehow
    //                 // var origin = "philadelphia";
    //                 // // var destination = $("#destination-input").val();
    //                 // var destination = "wildwood";

    //                 // // var queryURL = "https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination + "&key=AIzaSyDSIy69ZFze3YohnxsdisMinUBnct886_k";
    //                 // var queryURL = "https://maps.googleapis.com/maps/api/directions/json?origin=philadelphia&destination=wildwood&key=AIzaSyDSIy69ZFze3YohnxsdisMinUBnct886_k"

    //                 // $.ajax ({
    //                 //     url: queryURL,
    //                 //     method: "GET"
    //                 // }).then(function(response){
    //                 //     console.log(response)
    //                 // })
    //             })

