var searchButtonEl = document.querySelector("#search-btn");
var cityChoiceEl = document.querySelector("#city-choice");
var cityNameUI = document.querySelector("#city-name-ui")


var formSubmitHandler = function(event) {
    event.preventDefault();
      // get value from input element
  var city = cityChoiceEl.value.trim();

  if (city) {
    getWeather(city);

    // clear old content
    cityNameUI.textContent = '';
    cityChoiceEl.value = '';
  } else {
    alert('Please enter a City');
  }

};

searchButtonEl.addEventListener('click', formSubmitHandler);




