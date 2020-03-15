//Set variables
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');
const year = document.getElementById('year'); 

//Open image modal on click
function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
}

//Close modal on click
function close() {
    overlay.classList.remove('open');
}

//Set variable for each image
const images = document.querySelectorAll('.portfolio-item');

//Add event listener to open modal on click
images.forEach(image => image.addEventListener('click', handleClick));

//Add event listener to close modal on button click
overlayClose.addEventListener('click', close);

//Set copyright year using JS
var currentYear = new Date();
year.innerHTML = currentYear.getFullYear();

//Menu variables
let menu = document.getElementById('nav-slideout');
let toggleButton = document.getElementById('slideout-toggle');
let closeButton = document.getElementById('slideout-close');
let portfolioLink = document.getElementById('portfolioLink');
let aboutLink = document.getElementById('aboutLink');
let contactLink = document.getElementById('contactLink');

//show slideout menu when button is clicked
toggleButton.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.add('onscreen');
});

//close menu when 'x' is clicked
closeButton.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.remove('onscreen');
});

//close menu when any link is clicked
portfolioLink.addEventListener('click', function() {
    menu.classList.remove('onscreen');
});

aboutLink.addEventListener('click', function() {
    menu.classList.remove('onscreen');
});

contactLink.addEventListener('click', function() {
    menu.classList.remove('onscreen');
});