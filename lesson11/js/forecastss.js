const apiURL1 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=0f67612171889e60e18b70cc5ea95cb2&units=imperial";

fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const list = jsObject['list'];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
        const dayofweek = 0;


        
        for(i=0; i < list.length; i++) {
            let forecast = document.createElement('section');
            let dayofWeek = document.createElement('p');
            let icon = document.createElement('img');
            let temperature = document.createElement('p');
         
           
            if (list[i].dt_txt.includes("18:00:00")) {
                const d = new Date(list[i].dt_txt);
                const currentdow = d.getDay();
                const count = 1;
                const imagesrc = "https://openweathermap.org/img/wn/" + jsObject.list[i].weather[0].icon + '.png'; 
                const desc = jsObject.list[i].weather[0].description; 
               
                
                dayofWeek.textContent = days[currentdow];
                temperature.textContent = list[i].main.temp + ' \xB0F';
                
              
                icon.setAttribute("src", imagesrc);
                icon.setAttribute('alt', desc);

                forecast.appendChild(dayofWeek);
               
                forecast.appendChild(icon);
                forecast.appendChild(temperature);

                document.querySelector('div.forecast').appendChild(forecast);

                
                
            }
            
        }
         
       
        
        
       
    });