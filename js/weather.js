// var getWeather = 
function getWeather()  {

    var city = cityChoiceEl.value.trim();

    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial';
  
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {

      displayWeather(data, city);
      });
    });    
};


var displayWeather = function (weather, city) {
    console.log(weather);
    console.log(city);

    // City name
    var nameOfCity = document.createElement('h3');   
    nameOfCity.textContent = weather.name;
    cityNameUI.appendChild(nameOfCity);

    //Date
    let unixTimestamp = weather.dt;
    var newDate = new Date(unixTimestamp * 1000);
    var actualDate = document.createElement('h4');
    actualDate.textContent = newDate;
    cityNameUI.appendChild(actualDate);
    //console.log(newDate);

    
 
    tempEl.textContent = "Temp: " + weather.main.temp;
    windEl.textContent = "Wind: " + weather.wind.speed;
    humidityEl.textContent = "Humidity: " + weather.main.humidity;
    //uvIndex.textContent = "UV Index: "; 

    // // Todays date
    // $("#currentDay").text(moment().format("dddd, Do MMMM YYYY"));

    
       // for(var i = 0; i < weather.length; i++) {
                  
        // var temp = document.createElement('p');
        // var wind = document.createElement('p');
        // var humidity = document.createElement('p');
        // var uvIndex = document.createElement('p');

        // temp.textContent = weather[i].main.temp;
    
        //     tempEl.appendChild(temp);
            
           // return weather;
     // }
};



// https://api.openweathermap.org/data/2.5/weather?q=london&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial