const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=42.8713&lon=-112.4455&appid=0f67612171889e60e18b70cc5ea95cb2&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
document.getElementById('current').textContent = jsObject.current.weather[0].description;
document.getElementById('temperature').textContent = jsObject.current.temp;
document.getElementById('humidity').textContent = jsObject.current.humidity;
        
       



});


