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