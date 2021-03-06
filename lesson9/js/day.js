


    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "August", "September", 
"August", "September", "October", "Novemeber", "December"];
    var day = new Date();
    document.write(weekday[day.getDay()] + ", " + day.getDate() + " " + month[day.getMonth()] + " " + day.getFullYear());

    


