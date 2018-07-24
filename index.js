const request = require('request');
const argv = require('yargs').argv;


let apikey = '3b48a71b245e50d45f01aea5144f1554';
let city = argv.c || 'Boston';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;



request('url', function (err, response, body) {
  if (err) {
      console.log('error:', err); }
  else  {
      let weather = JSON.parse(body);
      let message = `its ${weather.main.temp} degrees in ${weather.name}!`;
   }
});
