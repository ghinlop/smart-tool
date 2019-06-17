var swiperDOM = document.querySelectorAll('[data-swiper]');


for(let i of swiperDOM){
    new Swiper(i.dataset.swiper, {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}