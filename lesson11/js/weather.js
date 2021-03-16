const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0f67612171889e60e18b70cc5ea95cb2&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
document.getElementById('current').textContent = jsObject.weather[0].main;
document.getElementById('high').textContent = jsObject.main.temp_max;
document.getElementById('temperature').textContent = jsObject.main.temp;
document.getElementById('humidity').textContent = jsObject.main.humidity;
document.getElementById('speed').textContent = jsObject.wind.speed;


});