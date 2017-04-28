const weather = require('./weather.js');

const params = process.argv;
weather.getWeather(params[2].toString())
  .then((response) => {
    switch (response.cod) {
      case 200:
        {
          process.stdout.write(weather.convertTemperature(response.main.temp));
          process.exit(0);
          break;
        }
      case 404:
        {
          process.stdout.write(`status code: ${response.cod} \nmessage: ${response.message.toString()}`);
          process.exit(0);
          break;
        }
      default:
        {
          throw new Error('invalid response from server');
        }
    }
  })
  .catch((error) => {
    process.stdout.write(error.message);
    process.abort();
  });
