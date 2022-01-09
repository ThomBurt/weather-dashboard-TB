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

var APIKey = "3fed7a6ebcb4e1b063e09df15c8e9e7c";


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
    // var todaysDate = new Date(weather.dt * 1000);
    // var day = todaysDate.getDate();
    // var month = todaysDate.getMonth() + 1;
    // var year = todaysDate.getFullYear();
    // //var Realdate = month + "/" + day + "/" + year;
    // cityNameUI.appendChild(month + "/" + day + "/" + year);

    //console.log(newDate);

    // Weather Icon
    iconMain.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png">`;
 
    tempEl.textContent = "Temp: " + Math.floor(weather.main.temp) + " \u00B0F";
    windEl.textContent = "Wind: " + Math.floor(weather.wind.speed) + " mph";
    humidityEl.textContent = "Humidity: " + Math.floor(weather.main.humidity) + " %";
    
     //UV Index
            var lat = weather.coord.lat;
            var lon = weather.coord.lon;
            var indexQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
            //https://api.openweathermap.org/data/2.5/uvi/forecast?lat=51.5085&lon=-0.1257&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&cnt=1
            fetch(indexQueryURL)
                .then(function (response) {
                  response.json().then(function(data) {
                    var indexEl = document.createElement("span");

                    if (data[0].value < 4 ) {
                        indexEl.setAttribute("class", "badge bg-success");
                    }
                    else if (data[0].value < 8) {
                        indexEl.setAttribute("class", "badge bg-warning");
                    }
                    else {
                        indexEl.setAttribute("class", "badge bg-danger");
                    }
                  
                    indexEl.innerHTML = data[0].value;
                    uvEl.innerHTML = "UV Index: ";
                    uvEl.append(indexEl);
                    //console.log(data);
                    });
                  });    
     searchHistoryBtn(weather);
};



function fiveDayForecast() {
  var city = cityChoiceEl.value.trim();
  var forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial&';
  fetch(forecastAPI).then(function(response) {
    response.json().then(function(data) {
      displayForecast(data, city);
    });
  });    
};



function displayForecast(weather, city) {
  console.log(weather);

  //FORECAST DAY 1
      //Date Day One
      let unixTimestamp = weather.list[8].dt;
      var newDate = new Date(unixTimestamp * 1000);
      var actualDate = document.createElement('p');
      actualDate.textContent = newDate;
      forecastDateOne.appendChild(actualDate);

      // Icon Day One
      iconOne.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.list[8].weather[0].icon}@2x.png">`;
      //Temp Day One
      TempOne = document.createElement('p');
      TempOne.textContent = Math.floor(weather.list[8].main.temp) + " \u00B0F";
      forecastTempOne.appendChild(TempOne);
      // Wind Day One
      windOne = document.createElement('p');
      windOne.textContent = Math.floor(weather.list[8].wind.gust) + " mph";
      forecastWindOne.appendChild(windOne);
      //Humidity Day One
      humidityOne = document.createElement('p');
      humidityOne.textContent = Math.floor(weather.list[8].main.humidity) + " %";
      forecastHumidityOne.appendChild(humidityOne);


        //FORECAST DAY 2
      //Date Day 2
      let unixTimestamp02 = weather.list[16].dt;
      var newDate2 = new Date(unixTimestamp02 * 1000);
      var actualDate2 = document.createElement('p');
      actualDate2.textContent = newDate2;
      forecastDateTwo.appendChild(actualDate2);
      // Icon Day Two
      iconTwo.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.list[16].weather[0].icon}@2x.png">`;
      //Temp Day 2
      tempTwo = document.createElement('p');
      tempTwo.textContent = Math.floor(weather.list[16].main.temp) + " \u00B0F";
      forecastTempTwo.appendChild(tempTwo);
      // Wind Day 2
      windTwo = document.createElement('p');
      windTwo.textContent = Math.floor(weather.list[16].wind.gust) + " mph";
      forecastWindTwo.appendChild(windTwo);
      //Humidity Day 2
      humidityTwo = document.createElement('p');
      humidityTwo.textContent = Math.floor(weather.list[16].main.humidity) + " %";
      forecastHumidityTwo.appendChild(humidityTwo);


      //FORECAST DAY 3
      //Date Day 3
      let unixTimestamp03 = weather.list[24].dt;
      var newDate3 = new Date(unixTimestamp03 * 1000);
      var actualDate3 = document.createElement('p');
      actualDate3.textContent = newDate3;
      forecastDate3.appendChild(actualDate3);
      // Icon Day Three
      iconThree.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.list[24].weather[0].icon}@2x.png">`;
      //Temp Day 3
      tempThree = document.createElement('p');
      tempThree.textContent = Math.floor(weather.list[24].main.temp) + " \u00B0F";
      forecastTemp3.appendChild(tempThree);
      // Wind Day 3
      windThree = document.createElement('p');
      windThree.textContent = Math.floor(weather.list[24].wind.gust) + " mph";
      forecastWind3.appendChild(windThree);
      //Humidity Day 3
      humidityThree = document.createElement('p');
      humidityThree.textContent = Math.floor(weather.list[24].main.humidity) + " %";
      forecastHumidity3.appendChild(humidityThree);


      //FORECAST DAY 4
      //Date Day 4
      let unixTimestamp04 = weather.list[32].dt;
      var newDate = new Date(unixTimestamp04 * 1000);
      var actualDate = document.createElement('p');
      actualDate.textContent = newDate;
      forecastDate4.appendChild(actualDate);
      // Icon Day Four
      iconFour.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.list[32].weather[0].icon}@2x.png">`;
      //Temp Day 4
      tempFour = document.createElement('p');
      tempFour.textContent = Math.floor(weather.list[32].main.temp) + " \u00B0F";
      forecastTemp4.appendChild(tempFour);
      // Wind Day 4
      windFour = document.createElement('p');
      windFour.textContent = Math.floor(weather.list[32].wind.gust) + " mph";
      forecastWind4.appendChild(windFour);
      //Humidity Day 4
      humidityFour = document.createElement('p');
      humidityFour.textContent = Math.floor(weather.list[32].main.humidity) + " %";
      forecastHumidity4.appendChild(humidityFour);


      //FORECAST DAY 5
      //Date Day 5
      let unixTimestamp05 = weather.list[39].dt;
      var newDate = new Date(unixTimestamp05 * 1000);
      var actualDate = document.createElement('p');
      actualDate.textContent = newDate;
      forecastDate5.appendChild(actualDate);
      // Icon Day Five
      iconFive.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.list[39].weather[0].icon}@2x.png">`;
      //Temp Day 5
      tempFive = document.createElement('p');
      tempFive.textContent = Math.floor(weather.list[39].main.temp) + " \u00B0F";
      forecastTemp5.appendChild(tempFive);
      // Wind Day 5
      windFive = document.createElement('p');
      windFive.textContent = Math.floor(weather.list[39].wind.gust) + " mph";
      forecastWind5.appendChild(windFive);
      //Humidity Day 5
      humidityFive = document.createElement('p');
      humidityFive.textContent = Math.floor(weather.list[39].main.humidity) + " %";
      forecastHumidity5.appendChild(humidityFive);
};


//api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c

// https://api.openweathermap.org/data/2.5/weather?q=london&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial
// https://api.openweathermap.org/data/2.5/forecast/daily?q=london&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial&cnt=5


