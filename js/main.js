/*
See something missing? Brittle code? Something that could be done better? Check 
out https://github.com/mathesond2/poopcode/ and find out how you can contribute!
*/

var redirectUrl = "http://www.popcode.org/";
var timeBeforeRedirect = 3000;

window.setTimeout(function() {
  window.location = redirectUrl;
}, timeBeforeRedirect);

// Big Hint: how could we find out the amount of images in the '/img' folder?
var randomNumber = Math.floor(Math.random() * (8 - 1)) + 1;
var htmlElement = document.querySelector('html');

htmlElement.style.backgroundImage = 'url("./img/' + randomNumber + '.jpg")';
