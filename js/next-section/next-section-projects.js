const navLink = document.querySelectorAll('.nav-link-item');
const colorBox = document.querySelectorAll('.next-section-animation-container--projects');

function startAnimNextSection () {

    gsap.to('.next-section-animation-container--projects', {
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

