function getJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector('#forecast').style.display = "block";
    //Set default location if one isn't provided
        //should know if input is zip code or city anme
        //should show city name even if code is entered
    let location = document.querySelector("#location").value || "Ann Arbor";

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    // let format = document.querySelectorAll("input[name=temp]:checked") || "imperial";
    // //will print "undefined", can't access
    // console.log(document.querySelectorAll("input[name=temp]:checked").value);

    let format;
    if (!document.querySelector("input[name=temp]:checked")){
        format = "imperial";
    } else {
        format = document.querySelector("input[name=temp]:checked").value;
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query
    let apiKey = "69a1493a989bc1ff0c33e7caa3c15592";
    let query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + format + "&appid=" + apiKey;
    // Your code here.

    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three
        //elements in HTML.
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));

        loc = json.name;
        tempImg = "http://openweathermap.org/img/wn/"+ json.weather[0].icon + "@2x.png";
        description = json.weather[0].description;
        temp = json.main.temp + " with " + description;

        console.log(loc);
        console.log(json.weather[0].icon);
        console.log(description);
        console.log(temp);


        document.querySelector("#loc").innerHTML = loc;
        document.querySelector("#temp").innerHTML = temp;
        document.querySelector("#tempImg").src = tempImg;
        console.log("Temp is " + temp + " " + format);
    });
}
