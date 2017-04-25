'use strict';

const config = require('./config');
const https = require('https');
// send the request
const sendApiRequest = function(){
    
}
const getZipCodeWeather = function(zipcode){
    //send a request based on zipcode
}

const getStateCityWeather = function(city, state){
    //sedn a requedst based on location
}

module.exports.getWeatherByZipCode = getZipCodeWeather;
module.exports.getWeatherByLocation = getStateCityWeather;
