var searchButtonEl = document.querySelector("#search-btn");
var searchHistoryButtonEl = document.querySelector("#search-history-btn");
var cityChoiceEl = document.querySelector("#city-choice");
var cityNameUI = document.querySelector("#city-name-ui");
var dateEl = document.querySelector("#currentDay");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var uvEl = document.querySelector("#uv");
var iconMain = document.querySelector("#main-icon-in-ui");
var searchHistoryTestEl = document.querySelector("#search-history-test");

//day 1 forecast elements
var forecastDateOne = document.querySelector("#date01");
var iconOne = document.querySelector("#icon01")
var forecastTempOne = document.querySelector("#Temp01");
var forecastWindOne = document.querySelector("#wind01");
var forecastHumidityOne = document.querySelector("#humidity01");
//day 2 forecast elements
var forecastDateTwo = document.querySelector("#date02");
var iconTwo = document.querySelector("#icon02")
var forecastTempTwo = document.querySelector("#temp02");
var forecastWindTwo = document.querySelector("#wind02");
var forecastHumidityTwo = document.querySelector("#humidity02");
//day 3 forecast elements
var forecastDate3 = document.querySelector("#date03");
var iconThree = document.querySelector("#icon03")
var forecastTemp3 = document.querySelector("#temp03");
var forecastWind3 = document.querySelector("#wind03");
var forecastHumidity3 = document.querySelector("#humidity03");
//day 4 forecast elements
var forecastDate4 = document.querySelector("#date04");
var iconFour = document.querySelector("#icon04")
var forecastTemp4 = document.querySelector("#temp04");
var forecastWind4 = document.querySelector("#wind04");
var forecastHumidity4 = document.querySelector("#humidity04");
//day 5 forecast elements
var forecastDate5 = document.querySelector("#date05");
var iconFive = document.querySelector("#icon05")
var forecastTemp5 = document.querySelector("#temp05");
var forecastWind5 = document.querySelector("#wind05");
var forecastHumidity5 = document.querySelector("#humidity05");

// Q Added
$(document).ready(function () {
  getCityFromLocalStorage();
});



var formSubmitHandler = function(event) {
    event.preventDefault();
      // get value from input element
  var city = cityChoiceEl.value.trim();

  if (city) {
    getWeather(city);
    fiveDayForecast(city);

    saveCityToLocalStorage(city);
   
    cityNameUI.textContent = '';
    cityChoiceEl.value = '';

    resetElements();

  } else {
    alert('Please enter a City');
  }
};



function resetElements(){
  forecastDateOne.textContent = "";
  forecastTempOne.textContent = "";
  forecastWindOne.textContent = "";
  forecastHumidityOne.textContent = "";
  forecastDateTwo.textContent = "";
  forecastTempTwo.textContent = "";
  forecastWindTwo.textContent = "";
  forecastHumidityTwo.textContent = "";
  forecastDate3.textContent = "";
  forecastTemp3.textContent = "";
  forecastWind3.textContent = "";
  forecastHumidity3.textContent = "";
  forecastDate4.textContent = "";
  forecastTemp4.textContent = "";
  forecastWind4.textContent = "";
  forecastHumidity4.textContent = "";
  forecastDate5.textContent = "";
  forecastTemp5.textContent = "";
  forecastWind5.textContent = "";
  forecastHumidity5.textContent = "";
};


searchButtonEl.addEventListener('click', formSubmitHandler);





