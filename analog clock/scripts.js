let hr = document.getElementById('hour-hand');
let mn = document.getElementById('min-hand');
let sc = document.getElementById('second-hand');

function displayTime(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hrotation = 30*hour + 0.5*min;
    let mrotation = 6*min + 0.1*sec;
    let srotation = 6*sec;
    hr.style.transform = `rotate(${hrotation}deg)`;
    mn.style.transform = `rotate(${mrotation}deg)`;
    sc.style.transform = `rotate(${srotation}deg)`;

}

setInterval(displayTime,1000);