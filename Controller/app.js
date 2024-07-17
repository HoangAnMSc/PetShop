$(document).ready(function () {
    $('.image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true, //lam moi slide
        arrows: false, //bat tat < ,>
        draggable: false, // bat tat keo , roll
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-circle-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-circle-outline"></ion-icon></button>`,
        dots: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    infinite: false,
                },
            },
        ],
        // autoplay: true,
        // autoplaySpeed: 2000,
    });
});