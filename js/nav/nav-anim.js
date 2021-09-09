// animation after open nav:

// lines
function lineOpen() {
    gsap.to('.lines-wrapper-bg', {
        opacity: 1,
    });
    gsap.from('.ver-line', {
        height: 0,
        duration: 1,
        stagger: 0.2,
    })
    gsap.from('.hor-line', {
        width: 0,
        duration: 0.4,
        stagger: 0.1,
    })
};

function navItems() {
    gsap.from('.nav-list-item', {
        x: '-100%',
        duration: 0.3,
        stagger: 0.1,
    });
    gsap.from('.langue-wrapper', {
        y: '105%',
        duration: 0.3,
        delay: 0.2,
    });
    gsap.from('.social-wrapper', {
        y: '105%',
        duration: 0.3,
        delay: 0.4,
    });
};


hamburger.addEventListener('click', function() {
    lineOpen();
    navItems();
});

