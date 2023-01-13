import { displayWeatherData } from "./displayWeatherData.js";
import { displayError } from "./displayWeatherData.js";
import { fToC } from "./convertWeatherData.js";
export const getWeatherData = (location) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=ab75faa45288d74551ded69010a51b7f&units=imperial`,
    { mode: "cors" }
  )
    .then(function (response) {
      document.querySelector(".loading").textContent = "";
      return response.json();
    })
    .then(function (response) {
      return response;
    })
    .then(function (response) {
      const weatherData = {
        name: response.name,
        temperature: response.main.temp,
        temperatureC: fToC(response.main.temp),
        feelsLike: response.main.feels_like,
        feelsLikeC: fToC(response.main.feels_like),
        humidity: response.main.humidity,
        condition: response.weather[0].main,
        conditionDescription: response.weather[0].description,
        windSpeed: response.wind.speed,
      };
      console.log(fToC(weatherData.temperature));
      console.log(weatherData);
      return weatherData;
    })
    .then(function (weatherData) {
      displayWeatherData(weatherData);
    })
    .catch(function (err) {
      err = displayError();
    });
};
