$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            // loop: true,
            layzyLoad: true,
            margin: 10,
            // center: true,
            autoHeight:true,
            stagePadding: 10,
            dots: true,
            responsiveClass: true,
            // add responsive breakpoints
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items:2,
                },
                1000: {
                    items: 3,
                },
                1200: {
                    items: 4,
                }
            },
        }
    );

});

