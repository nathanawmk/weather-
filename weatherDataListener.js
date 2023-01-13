import { getWeatherData } from "./APIFunction.js";

export const weatherDataListener = () => {
  const form = document.querySelector(".form");
  const search = document.querySelector(".search");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeatherData(search.value);
    form.reset();
  });
};
