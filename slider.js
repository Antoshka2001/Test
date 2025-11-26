const swiper = new Swiper ('.swiper' , {

    allowSlidePrev: true,
    allowSlideNext: true,
    allowTouchMove: false,
    loop: true,
    slidesPerView: '2',
    speed: '1000',

    pagination: {
        el: '.swiper-pagination'
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})