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
        let h3 = document.createElement('h3');
        let icon = document.createElement('img');
        let num = i + 1;
      //  let linkText = document.createTextNode("Web Page");

       
       

       

        h2.textContent = directory[i].businessName;
        p1.textContent = "Location: " + directory[i].address;
        p2.textContent = "Phone Number: " + directory[i].phoneNumber;
        h3.textContent = "Web Address; " + directory[i].link;
      // p3.appendChild(linkText);
     //  p3.title = "Web Address";
      // p3.href = directory[i].link;
      
        icon.setAttribute('src', directory[i].icon);
        icon.setAttribute('alt', directory[i].businessName + '-' + num);


        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(h3);
        card.appendChild(icon);

        document.querySelector('div.cards').appendChild(card);

    }


});


