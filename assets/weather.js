$("#find-weather").on("click", function (event) {
    event.preventDefault();



    //make var newzip by taking in weather-input
    var newzip = $("#destination-searchBtn").val().trim();

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + newzip + ",us&appid=7a1b3403d3345a747633446a6905bb5e";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.name);
        console.log(response.weather);
        $("#weather-view").text(JSON.stringify(response.name));
        $("#weather-view").text(JSON.stringify(response.weather));
    });

    // -----------------------------------------------------------------------

});

$("#destination-searchBtn").on("click", function (event) {
    event.preventDefault();



    //make var newzip by taking in weather-input
    var city = $("#destination-search").val().trim();

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&appid=7a1b3403d3345a747633446a6905bb5e";

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
        // $("#search").append("<p>" + response.weather[0].description + "</p>");
        // $("#search").append("<p>"+ "Current Temperature: " + farenheit + "F" +" <p>");

    });

    // -----------------------------------------------------------------------

});