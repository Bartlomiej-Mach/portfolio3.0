const logoFigure = document.querySelectorAll('.logo-figure');

gsap.from('.logo-figure', {
    scale: 0,
    stagger: 0.1,
    delay: 0.6,
    duration: 0.1,
});

gsap.from('.studio-name', {
    y: '100%',
    delay: 2,
    duration: 0.2,
});

gsap.to('.home-logo-anim', {
    y: '-105%',
    delay: 2.8,
    duration: 0.8,
});