'use strict';

const fs = require('fs');

const fileName = './config.json';
let config;

const getConfig = function () {
    try {
        config = require(fileName);
    } catch (error) {
        console.error(error);
    }
}