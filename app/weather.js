'use strict';

const config = require('./config');
const https = require('https');
// send the request
function sendApiRequest() {
    https.get(`api.openweathermap.org/data/2.5/weather?${arguments[0]}&appid=${config.weather_api_key}`, (result) => {
        return result;
    });
}
function getZipCodeWeather(zipcode) {
    // send a request based on zipcode
    return sendApiRequest(`zip=${zipcode}`);
}

function getStateCityWeather(city, state) {
    // send a requedst based on location
    return sendApiRequest(`city=${city}&state=${state}`);
}

module.exports.getWeatherByZipCode = getZipCodeWeather;
module.exports.getWeatherByLocation = getStateCityWeather;
