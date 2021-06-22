let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let changeTime = document.querySelector("#current-time-now");

changeTime.innerHTML = `${day}, ${hours}:${minutes}`;

function convertToFarenheight(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#current-temp");
  let temp = temperatureElement.innerHTML;
  temperatureElement.innerHTML = "Som";
}

let farenheightLink = document.querySelector("#degrees-link");
farenheightLink.addEventListener("click", convertToFarenheight);

function searchCity(city) {
  let apiKey = "b3bc0ffe4960659be062d0908b210ff3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("h2").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  searchCity(city);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

navigator.geolocation.getCurrentPosition(function (position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
