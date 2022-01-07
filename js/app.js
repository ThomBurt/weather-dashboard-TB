var searchButtonEl = document.querySelector("#search-btn");
var cityChoiceEl = document.querySelector("#city-choice");
var cityNameUI = document.querySelector("#city-name-ui");
var dateEl = document.querySelector("#currentDay");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var uvEl = document.querySelector("#uv");


var formSubmitHandler = function(event) {
    event.preventDefault();
      // get value from input element
  var city = cityChoiceEl.value.trim();

  if (city) {
    getWeather(city);

   
    cityNameUI.textContent = '';
    cityChoiceEl.value = '';
    //displayWeather();
    
  } else {
    alert('Please enter a City');
  }
};

searchButtonEl.addEventListener('click', formSubmitHandler);




