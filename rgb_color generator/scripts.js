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

    greenValue.textContent = greenvalue;
    redValue.textContent = redvalue;
    blueValue.textContent = bluevalue

    const rgbcolor = `rgb(${redvalue},${greenvalue},${bluevalue})`;
    colorBox.style.backgroundColor = rgbcolor;

    inputType.textContent = rgbcolor;

};
updateColor();

copyButton.addEventListener('click',() => {
    navigator.clipboard.writeText(inputType.innerText)
        .then(() => alert('Copied to clipboard: ' + inputType.innerText))
        .catch((err) => console.error('Failed to copied:', err));

});