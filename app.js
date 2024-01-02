const houre1 = document.getElementById("hours");
const mine1 = document.getElementById("min");
const sece1 = document.getElementById("sec");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h = h-12;
        ampm = "PM";
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    houre1.innerText = h;
    mine1.innerText = m;
    sece1.innerText = s;
    ampm, (innerText = ampm);

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();