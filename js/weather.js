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

    // //icon
    // var icon = document.createElement('img');
    // icon.inner.HTML = weather[0].icon;
    // iconMain.appendChild(icon);

    //Date
    let unixTimestamp = weather.dt;
    var newDate = new Date(unixTimestamp * 1000);
    var actualDate = document.createElement('h4');
    actualDate.textContent = newDate;
    cityNameUI.appendChild(actualDate);
    //console.log(newDate);

    // Weather Icon
    iconMain.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png">`;
 
    tempEl.textContent = "Temp: " + Math.floor(weather.main.temp) + " \u00B0F";
    windEl.textContent = "Wind: " + Math.floor(weather.wind.speed) + " mph";
    humidityEl.textContent = "Humidity: " + Math.floor(weather.main.humidity) + " %";
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
     searchHistory(weather);
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




}


//api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c

// https://api.openweathermap.org/data/2.5/weather?q=london&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial
// https://api.openweathermap.org/data/2.5/forecast/daily?q=london&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial&cnt=5



      // let timeStamp01 = weather.list[0].dt;
      // let dateObj01 = new Date(timeStamp01);
      // let month = dateObj01.getMonth() + 1;
      // let year = dateObj01.getFullYear();
      // let date = dateObj01.getDate();

      // console.log(month, year, date);


      //  for (let i = 0; i <weather.list.length; i+=8) {
//   const temp = new Forecast(weather.list[i].dt_txt,
//                             weather.list[i].weather[0].icon,
//                             weather.list[i].main.temp,
//                             weather.list[i].wind.gust,
//                             weather.list[i].main.humidity)
//     this.cityForecast.push(temp);
//  }
//  console.log(this.cityForecast);