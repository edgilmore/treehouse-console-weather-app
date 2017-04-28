const config = require('./config').getConfig();
const http = require('http');

// send the request
function sendApiRequest(query) {
  return new Promise((resolve, reject) => {
    http.get(`http://api.openweathermap.org/data/2.5/weather?${query}&appid=${config.weather_api_key}`, (response) => {
      let responseData = '';
      response.on('data', (data) => {
        responseData += data;
      });
      response.on('end', () => {
        const body = JSON.parse(responseData);
        resolve(body);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

function convertFromKelvinToFahrenheight(kelvinTemperature) {
  const convertedTemp = ((kelvinTemperature * (9 / 5)) - 459.67);
  return `${convertedTemp.toFixed(2)} F`;
}

function getWeather(searchString) {
  // send a request based on zipcode
  return sendApiRequest(`q=${searchString},us`);
}

module.exports.getWeather = getWeather;
module.exports.convertTemperature = convertFromKelvinToFahrenheight;
