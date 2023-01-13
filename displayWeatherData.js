import { getWeatherData } from "./APIFunction.js";
const tempButtonContainer = document.querySelector(".temp-button-container");
const fButton = document.querySelector(".fButton");
const cButton = document.querySelector(".cButton");
const searchContainer = document.querySelector(".search-container");
const errorSpan = document.querySelector(".error-span");
function getEle(selector) {
  const element = document.querySelector(selector);
  return element;
}

export function displayWeatherData(weatherData) {
  if (searchContainer.contains(errorSpan)) {
    errorSpan.remove();
  }
  tempButtonContainer.classList.remove("hide");
  getEle(".name").textContent = weatherData.name;
  getEle(".temp").textContent = `Temperature: ${Math.round(
    weatherData.temperature
  ).toString()}°F`;
  getEle(".feels").textContent = `Feels like: ${Math.round(
    weatherData.feelsLike
  ).toString()}°F`;
  getEle(".condition").textContent = weatherData.condition;
  getEle(
    ".humidity"
  ).textContent = `Humidity: ${weatherData.humidity.toString()}%`;
  getEle(".wind").textContent = `Wind: ${weatherData.windSpeed.toString()} mph`;
  getEle(".wind").classList.add("show");

  const fahrenheitListener = (() => {
    fButton.addEventListener("click", () => {
      getEle(".temp").textContent = `Temperature: ${Math.round(
        weatherData.temperature
      ).toString()}°F`;
      getEle(".feels").textContent = `Feels like: ${Math.round(
        weatherData.feelsLike
      ).toString()}°F`;
    });
  })();

  const celsiusListener = (() => {
    cButton.addEventListener("click", () => {
      getEle(".temp").textContent = `Temperature: ${weatherData.temperatureC
        .toFixed(2)
        .toString()}°C`;
      getEle(".feels").textContent = `Feels like: ${weatherData.feelsLikeC
        .toFixed(2)
        .toString()}°C`;
    });
  })();

  switch (weatherData.condition) {
    case "Clear":
      getEle(".conditionEmoji").textContent = "☀";
      break;
    case "Rain":
      getEle(".conditionEmoji").textContent = "☂";
      break;
    case "Mist":
      getEle(".conditionEmoji").textContent = "☂";
      break;
    case "Clouds":
      getEle(".conditionEmoji").textContent = "☁";
      break;
    case "Snow":
      getEle(".conditionEmoji").textContent = "❄";
      break;
    default:
      "";
      break;
  }
}
export function displayError() {
  const errorSpan = document.querySelector(".error-span");
  errorSpan.textContent = "Please enter a valid location";
}

export const weatherDataListener = () => {
  const form = document.querySelector(".form");
  const search = document.querySelector(".search");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeatherData(search.value);
    document.querySelector(".loading").textContent = "Loading";
    form.reset();
  });
};
