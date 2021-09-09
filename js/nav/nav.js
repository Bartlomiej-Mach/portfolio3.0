const list = document.querySelector('.nav-list-wrapper');
const lineWrapper = document.querySelector('.lines-wrapper-bg');
const hamburger = document.querySelector('.hamburger');

const nextSectionBtn = document.querySelectorAll('.next-section');

const sections = document.querySelectorAll('.section-zoom-out');

const hamburgerLines = document.querySelector('.hamburger');

const menuFunction = () => {

    list.classList.toggle('nav-list--active');
    lineWrapper.classList.toggle('nav-lines--active');

    hamburgerLines.classList.toggle('hamburger--active');

    nextSectionBtn.forEach(element => {
        element.classList.toggle('next-section--active');
    });
    sections.forEach(element => {
        element.classList.toggle('section-zoom-out--active');
    });
    
    hamburger.disabled = true;
    setTimeout(function() {
        hamburger.disabled = false;
    }, 1300);
};

hamburger.addEventListener('click', menuFunction);



// function submitPoll(id){
//     document.getElementById("votebutton").disabled = true;
//     setTimeout(function(){
//         document.getElementById("votebutton").disabled = false;
//     },5000);
// }