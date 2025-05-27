const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY="48d08bea1ce9acbac1dd9aaae47f5867";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //console.log("You live in", lat, lon);
  //console.log(position);
  const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=mertic`;
  //console.log(url);
  fetch(url)
  .then(response => response.json())
  .then(data=>{
    //console.log(data.name, data.weather[0].main);
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);