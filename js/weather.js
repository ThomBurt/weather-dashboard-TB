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


var getWeather = function(city) {
    // format the github api url
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial';
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
      console.log(data);
      });
    });
  };



getWeather('london');

