

<form id="location-form">
    <label for="location-input">Enter Your Destination!</label>
    <input type="text" id="location-input"><br>

        <input id="add-location" type="submit" value="Add Your Beach!">

    </form>
        <div id="locations">

        </div>

        <div id="">
        </div>

        <br>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script type="text/javascript">

                $("#add-location").on("click", function (event) {

                    event.preventDefault();

                var location = $("#location-input").val().trim();

                locations.push(location);

                renderButtons(location);
            }

        function {
                    $("#locations").empty();

                for (var i = 0; i < locations.length; i++) {
                var location = locations[i]
                $("#locations").append("<img>" + location + "</img>")

        }
        function renderImage(team) {
            var queryURL = "apidojo-booking-v1.p.rapidapi.com" + location + "&api_key=dc6zaTOxFJmzC&limit=10";
            $.ajax({
                    url: queryURL,
method: "GET"

            }).then(function (response) {
                    $("#hotels-appear-here").empty()
                var results = response.data;

                for (var i = 0; i < results.length; i++) {



                    $("#locations-appear-here").prepend(locations);



                <script src="https://code.jquery.com/jquery-3.3.1.min.js"
                    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

                <script src="assets/javascript.js"></script>


