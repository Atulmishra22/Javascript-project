let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

let greenValue = document.getElementById('greenvalue');
let redValue = document.getElementById('redvalue');
let blueValue = document.getElementById('bluevalue');

let colorBox = document.getElementById('colorbox');
let copyButton = document.getElementById('copyButton');
let inputType = document.getElementById('inputType');

red.addEventListener('input',updateColor);
blue.addEventListener('input',updateColor);
green.addEventListener('input',updateColor);

function updateColor() { 
    const redvalue = red.value;
    const bluevalue = blue.value;
    const greenvalue = green.value;

    greenValue.innerText = greenvalue;
    redValue.innerText = redvalue;
    blueValue.innerText = bluevalue

    const rgbcolor = `rgb(${redvalue},${greenvalue},${bluevalue})`;
    colorBox.style.backgroundColor = rgbcolor;

    inputType.innerText = rgbcolor;

};
updateColor();

