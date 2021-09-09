const navLink = document.querySelectorAll('.nav-link-item');
const colorBox = document.querySelectorAll('.next-section-animation-container');
const pageButton = document.querySelectorAll('.page-button');
const projectBtn = document.querySelectorAll('.slider--item');
const mainBtns = document.querySelectorAll('.section-name');

gsap.to('.next-section-animation-container', {
    y: '-200vh',
    delay: 0.3,
    duration: 0.6,
});

function startAnimNextSection () {

    gsap.to('.next-section-animation-container', {
        y: 0,
        duration: 0.4,
    })
};


function delayNextSection (URL) {
    setTimeout( function() { window.location = URL }, 600 );
}

navLink.forEach(element => {
    element.addEventListener('click', startAnimNextSection);
});

if(pageButton) {
    pageButton.forEach(element => {
        element.addEventListener('click', startAnimNextSection);
    });
}
if(mainBtns) {
    mainBtns.forEach(element => {
        element.addEventListener('click', startAnimNextSection);
    });
};

projectBtn.forEach(element => {
    element.addEventListener('click', startAnimNextSection);
});
