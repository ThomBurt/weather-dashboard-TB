var getWeather = function(city) {
    // format the github api url
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial';
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
      console.log(data);
      for(var i = 0; i < data.length; i++) {
        var cityName = document.createElement('h3');
        var temp = document.createElement('p');
        var wind = document.createElement('p');
        var humidity = document.createElement('p');
        var uvIndex = document.createElement('p');
    
        cityName.textContent = data[i].name;
    
        cityNameUI.appendChild(cityName);
      }
      });
    });
  };



// getWeather();




// https://api.openweathermap.org/data/2.5/weather?q=london&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial


//var getCityName = document.querySelector('#city-choice');



// var getWeather = function(city) {

//     var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial';


//   // make a get request to url
//   fetch(apiUrl)
//     .then(function(response) {
//       // request was successful
//       if (response.ok) {
//         console.log(response);
//         response.json().then(function(data) {
//           console.log(data);
//           formSubmitHandler(data, city);
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     })
//     .catch(function(error) {
//       alert('Unable to connect to Open Weather');
//     });
// };