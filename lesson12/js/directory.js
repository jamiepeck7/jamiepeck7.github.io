const requestURL = 'https://jamiepeck7.github.io/lesson12/directory.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let image = document.createElement('img');
        let fullname = prophets[i].name + ' ' + prophets[i].lastname;
        let ldsnum = i + 1;

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        p1.textContent = "Date of Birth: " + prophets[i].birthdate;
        p2.textContent = "Place of Birth: " + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', fullname + '-' + ldsnum);


        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);

    }


});


