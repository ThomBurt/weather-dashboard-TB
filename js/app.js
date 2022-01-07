var searchButtonEl = document.querySelector("#search-btn");
var cityChoiceEl = document.querySelector("#city-choice");
var cityNameUI = document.querySelector("#city-name-ui");
var dateEl = document.querySelector("#currentDay");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var uvEl = document.querySelector("#uv");

var forecastDateOne = document.querySelector("#date01");
var forecastTempOne = document.querySelector("#Temp01");
var forecastWindOne = document.querySelector("#wind01");
var forecastHumidityOne = document.querySelector("#humidity01");

var forecastDateTwo = document.querySelector("#date02");
var forecastTempTwo = document.querySelector("#temp02");
var forecastWindTwo = document.querySelector("#wind02");
var forecastHumidityTwo = document.querySelector("#humidity02");


var formSubmitHandler = function(event) {
    event.preventDefault();
      // get value from input element
  var city = cityChoiceEl.value.trim();

  if (city) {
    getWeather(city);
    fiveDayForecast(city);

   
    cityNameUI.textContent = '';
    cityChoiceEl.value = '';

    
  } else {
    alert('Please enter a City');
  }
};

searchButtonEl.addEventListener('click', formSubmitHandler);




