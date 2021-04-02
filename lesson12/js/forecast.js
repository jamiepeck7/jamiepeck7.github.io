const apiURL1 = "https://api.openweathermap.org/data/2.5/onecall?lat=42.8713&lon=-112.4455&appid=0f67612171889e60e18b70cc5ea95cb2&units=imperial";

fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const daily = jsObject['daily'];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
        const dayofWeek = 0;


        
        for(i=0; i < daily.length; i++) {
            let forecast = document.createElement('section');
            let dayofWeek = document.createElement('p');
            let icon = document.createElement('img');
            let temperature = document.createElement('p');
         
           
            if (daily[i].temp.day) {
                const d = new Date(daily[i].temp.day);
                const currentdow = d.getDay();
                const count = 1;
                const imagesrc = "https://openweathermap.org/img/wn/" + jsObject.daily[i].weather[0].icon + '.png'; 
                const desc = jsObject.daily[i].weather[0].description; 
               
                
                dayofWeek.textContent = days[currentdow];
                temperature.textContent = daily[i].temp.day + ' \xB0F';
                
              
                icon.setAttribute("src", imagesrc);
                icon.setAttribute('alt', desc);

                forecast.appendChild(dayofWeek);
               
                forecast.appendChild(icon);
                forecast.appendChild(temperature);

                document.querySelector('div.forecast').appendChild(forecast);

                
                
            }
            
        }
         
       
        
        
       
    });