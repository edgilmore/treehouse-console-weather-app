'use strict';

const fs = require('fs');

const fileName = './config.json';
let config;

const getConfig = function () {
    try {
        config = require(fileName);
    } catch (error) { 
        config = {};
        throw error;
    }
    return config;
};

module.exports.getConfig = getConfig;
