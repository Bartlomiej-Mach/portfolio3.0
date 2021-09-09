const swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: "coverflow",
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
    },
});