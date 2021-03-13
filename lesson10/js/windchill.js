var tem =  document.getElementById("temperature").innerHTML;
var vel = document.getElementById("speed").innerHTML;
console.log(tem);
console.log(vel);
var wcf;
if (tem <= 50 && vel > 3) {
        wcf = (35.74 + 0.6215 * tem - 35.75 * Math.pow(vel, .16) + 0.4275 * tem * Math.pow(vel, 0.16)).toFixed(1);
        console.log(wcf);
} 
    else {
        wcf = "N/A";
    }

 document.getElementById("windchill").innerHTML = wcf;



