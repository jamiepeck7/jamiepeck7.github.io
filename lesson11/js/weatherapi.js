const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0f67612171889e60e18b70cc5ea95cb2&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
document.getElementById('current-temp').textContent = jsObject.main.temp;

const imagesrc = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + '.png'; 
const desc = jsObject.weather[0].description; 
document.getElementById("imagesrc").textContent = imagesrc;
document.getElementById("icon").setAttribute("src", imagesrc);
document.getElementById("icon").setAttribute("alt", desc);
    });