const apiURL1 = "https://api.openweathermap.org/data/2.5/onecall?lat=42.8713&lon=-112.4455&appid=0f67612171889e60e18b70cc5ea95cb2&units=imperial";

fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const daily = jsObject['daily'];
   
        const doweek = new Date();
        const weekday = doweek.toLocaleDateString("default",{weekday: "long"});
        
       console.log(weekday);
          
        
        for(i=1; i < 4; i++) {
            let forecast = document.createElement('section');
            let dayofWeek = document.createElement('p');
            let icon = document.createElement('img');
            let temperature = document.createElement('p');
            const d = new Date(daily[i].dt * 1000).toLocaleDateString("en", { weekday: "long",});
            console.log(d);

         
         
            const imagesrc = "https://openweathermap.org/img/wn/" + jsObject.daily[i].weather[0].icon + '.png'; 
            const desc = jsObject.daily[i].weather[0].description; 
                        
            dayofWeek.textContent = d;
            temperature.textContent = daily[i].temp.day + ' \xB0F';
             
              
            icon.setAttribute("src", imagesrc);
            icon.setAttribute('alt', desc);

            forecast.appendChild(dayofWeek);
               
            forecast.appendChild(icon);
            forecast.appendChild(temperature);

            document.querySelector('div.forecast').appendChild(forecast);  
           
           
        }                                                                                                                                                                                                                                                             
        
        
       
    });