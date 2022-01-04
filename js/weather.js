// https://api.openweathermap.org/data/2.5/weather?q=cityName&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial


//var getCityName = document.querySelector('#city-choice');



var getWeather = function(city) {

    var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3fed7a6ebcb4e1b063e09df15c8e9e7c&units=imperial';


  // make a request to the url
  fetch(apiURL).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

getWeather('london');

// fetch weather from API

// function Weather {
//     constructor(city) {
//         this.apiKey = '3fed7a6ebcb4e1b063e09df15c8e9e7c';
//         this.city = city;        
//     }

//     function getWeather() {
//         const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial.json`);

//         const reponseData = await reponse.json();
    
//         return reponseData.main;
//     }
//     changeLocation(city) {
//         this.city = city;
//     }
// };