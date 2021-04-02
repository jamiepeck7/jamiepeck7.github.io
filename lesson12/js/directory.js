const requestURL = 'https://jamiepeck7.github.io/lesson12/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let image = document.createElement('img');
        let info = document.createElement("div");

        
        let name = towns[i].name
        let imageurl = "images/" + towns[i].photo;
        console.log(imageurl);

        if (towns[i].name == "Fish Haven" ){
            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            p1.textContent = "Year Founded: " + towns[i].yearFounded;
            p2.textContent = "Population: " + towns[i].currentPopulation;
            p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            image.setAttribute("src", imageurl);
            image.setAttribute('alt', name);
            info.appendChild(h2);
            info.appendChild(h3);
            info.appendChild(p1);
            info.appendChild(p2);
            info.appendChild(p3);
            card.appendChild(info);
            card.appendChild(image);
    
            document.querySelector('div.cards').appendChild(card);
        }
        else if (towns[i].name == "Preston" ){
            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            p1.textContent = "Year Founded: " + towns[i].yearFounded;
            p2.textContent = "Population: " + towns[i].currentPopulation;
            p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            image.setAttribute('src', imageurl);
            image.setAttribute('alt', name);
            info.appendChild(h2);
            info.appendChild(h3);
            info.appendChild(p1);
            info.appendChild(p2);
            info.appendChild(p3);
            card.appendChild(info);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
         
        }
        else if (towns[i].name == "Soda Springs" ){
            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            p1.textContent = "Year Founded: " + towns[i].yearFounded;
            p2.textContent = "Population: " + towns[i].currentPopulation;
            p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            image.setAttribute('src', imageurl);

            image.setAttribute('alt', name);

            info.appendChild(h2);
            info.appendChild(h3);
            info.appendChild(p1);
            info.appendChild(p2);
            info.appendChild(p3);
            card.appendChild(info);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
        }
       else{}



     
    }


});


