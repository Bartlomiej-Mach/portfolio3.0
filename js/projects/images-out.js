const bgImg = document.querySelector('.to-next-section-img');


function outItems() {

    gsap.to('.navigation-buttons-wrapper', {
        opacity: 0,
        duration: .2,
    });

    gsap.to('.slider-wrapper', {
        opacity: 0,
        duration: .2,
        delay: .1,
    });  

};


function project1() {
    outItems();
    setTimeout(function() {
        bgImg.classList.add('project-1--active', 'to-next-section-img--active');
    }, 200);
};

function project2() {
    outItems();
    setTimeout(function() {
        bgImg.classList.add('project-2--active', 'to-next-section-img--active');
    }, 200);
};

function project3() {
    outItems();
    setTimeout(function() {
        bgImg.classList.add('project-3--active', 'to-next-section-img--active');
    }, 200);
};

function project4() {
    outItems();
    setTimeout(function() {
        bgImg.classList.add('project-4--active', 'to-next-section-img--active');
    }, 200);
};


// slides as buttons 
document.querySelector('.slide-project-1').addEventListener('click', project1);
document.querySelector('.slide-project-2').addEventListener('click', project2);
document.querySelector('.slide-project-3').addEventListener('click', project3);
document.querySelector('.slide-project-4').addEventListener('click', project4);


function delay (URL) {
    setTimeout( function() { window.location = URL }, 700 );
}
