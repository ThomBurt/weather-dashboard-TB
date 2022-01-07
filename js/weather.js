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

function fiveDayForecast() {
  var city = cityChoiceEl.value.trim();
  var forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial&cnt=5';
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
      let unixTimestamp = weather.list[0].dt;
      var newDate = new Date(unixTimestamp * 1000);
      var actualDate = document.createElement('p');
      actualDate.textContent = newDate;
      forecastDateOne.appendChild(actualDate);

      //Temp Day One
      TempOne = document.createElement('p');
      TempOne.textContent = weather.list[0].main.temp;
      forecastTempOne.appendChild(TempOne);

      // Wind Day One
      windOne = document.createElement('p');
      windOne.textContent = weather.list[0].wind.gust;
      forecastWindOne.appendChild(windOne);

      //Humidity Day One
      humidityOne = document.createElement('p');
      humidityOne.textContent = weather.list[0].main.humidity;
      forecastHumidityOne.appendChild(humidityOne);


        //FORECAST DAY 2
      //Date Day One
      let unixTimestamp02 = weather.list[1].dt;
      var newDate = new Date(unixTimestamp * 1000);
      var actualDate = document.createElement('p');
      actualDate.textContent = newDate;
      forecastDateTwo.appendChild(actualDate);

      //Temp Day One
      tempTwo = document.createElement('p');
      tempTwo.textContent = weather.list[1].main.temp;
      forecastTempTwo.appendChild(tempTwo);

      // Wind Day One
      windTwo = document.createElement('p');
      windTwo.textContent = weather.list[1].wind.gust;
      forecastWindTwo.appendChild(windTwo);

      //Humidity Day One
      humidityTwo = document.createElement('p');
      humidityTwo.textContent = weather.list[1].main.humidity;
      forecastHumidityTwo.appendChild(humidityTwo);





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