
const fs = require('fs');

const fileName = './config.json';
let config;

function getConfig() {
  try {
    config = require(fileName);
  } catch (error) {
    config = {};
    throw error;
  }
  return config;
}

module.exports.getConfig = getConfig;
