const tl = gsap.timeline();

const text = document.querySelector('.subheading-text');
// header text

tl.from('.heading-text', {
    height: 0,
    delay: 0.4,
    duration: 0.2,
});

if(text) {
    tl.from('.subheading-text', {
        opacity: 0,
        height: 0,
        delay: 0.2,
        duration: 0.2,
    });
};

tl.from('.ver-line-all', {
    height: 0,
    duration: 0.3,
    stagger: 0.2,
}, "<");

tl.to('.next-section', {
    opacity: 1,
    duration: 0.2,
});