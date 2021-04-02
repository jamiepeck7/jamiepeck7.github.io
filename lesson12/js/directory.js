const requestURL = 'https://jamiepeck7.github.io/lesson12/business.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    for (let i = 0; i < directory.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let icon = document.createElement('img');
        let num = i + 1;

        h2.textContent = directory[i].businessName;
        p1.textContent = "Location: " + directory[i].address;
        p2.textContent = "Phone Number: " + directory[i].phoneNumber;
        p2.textContent = "Web Address: " + directory[i].webAddress;
        icon.setAttribute('src', directory[i].icon);
        image.setAttribute('alt', directory[i].businessName + '-' + num);


        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(icon);

        document.querySelector('div.cards').appendChild(card);

    }


});


