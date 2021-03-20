const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=0f67612171889e60e18b70cc5ea95cb2&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
document.getElementById('current').textContent = jsObject.weather[0].main;
document.getElementById('high').textContent = jsObject.main.temp_max;
document.getElementById('temperature').textContent = jsObject.main.temp;
document.getElementById('humidity').textContent = jsObject.main.humidity;
document.getElementById('speed').textContent = jsObject.wind.speed;


function Windchill() {
    var tem = jsObject.main.temp;
    var vel = jsObject.wind.speed;
    //console.log(tem);
    //console.log(vel);
    var wcf;
        if (tem <= 50 && vel > 3) {
            wcf = (35.74 + 0.6215 * tem - 35.75 * Math.pow(vel, .16) + 0.4275 * tem * Math.pow(vel, 0.16)).toFixed(1);
    //console.log(wcf);
        } 
        else {
            wcf = "N/A";
        }
    return wcf;
    }
    
    document.getElementById("windchill").textContent = Windchill();
    

});
