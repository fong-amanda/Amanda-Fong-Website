/** Semester 1 */

const multipleItemCarouselSem1 = document.querySelector('#carouselSem1Controls');

if (window.matchMedia("(min-width: 576px)").matches) {
    const carouselSem1 = new bootstrap.Carousel(multipleItemCarouselSem1, {
        interval: false,
    });

    var carouselWidthSem1 = $(multipleItemCarouselSem1).find('.carousel-inner')[0].scrollWidth;
    var cardWidthSem1 = $(multipleItemCarouselSem1).find('.carousel-item').width();

    var scrollPositionSem1 = 0;

    $(multipleItemCarouselSem1).find('.carousel-control-next').on('click', function () {
        if (scrollPositionSem1 < (carouselWidthSem1 - (cardWidthSem1 * 4))) {
            console.log('next');
            scrollPositionSem1 = scrollPositionSem1 + cardWidthSem1;
            $(multipleItemCarouselSem1).find('.carousel-inner').animate({ scrollLeft: scrollPositionSem1 }, 600);
        }
    });

    $(multipleItemCarouselSem1).find('.carousel-control-prev').on('click', function () {
        if (scrollPositionSem1 > 0) {
            console.log('prev');
            scrollPositionSem1 = scrollPositionSem1 - cardWidthSem1;
            $(multipleItemCarouselSem1).find('.carousel-inner').animate({ scrollLeft: scrollPositionSem1 }, 600);
        }
    });
} else {
    $(multipleItemCarouselSem1).addClass('slide');
}

/** Semester 2 */

// const multipleItemCarouselSem2 = document.querySelector('#carouselSem2Controls');

// if (window.matchMedia("(min-width: 576px)").matches) {
//     const carouselSem2 = new bootstrap.Carousel(multipleItemCarouselSem2, {
//         interval: false,
//     });

//     var carouselWidthSem2 = $(multipleItemCarouselSem2).find('.carousel-inner')[0].scrollWidth;
//     var cardWidthSem2 = $(multipleItemCarouselSem2).find('.carousel-item').width();

//     var scrollPositionSem2 = 0;

//     $(multipleItemCarouselSem2).find('.carousel-control-next').on('click', function () {
//         if (scrollPositionSem2 < (carouselWidthSem2 - (cardWidthSem2 * 4))) {
//             console.log('next');
//             scrollPositionSem2 = scrollPositionSem2 + cardWidthSem2;
//             $(multipleItemCarouselSem2).find('.carousel-inner').animate({ scrollLeft: scrollPositionSem2 }, 600);
//         }
//     });

//     $(multipleItemCarouselSem2).find('.carousel-control-prev').on('click', function () {
//         if (scrollPositionSem2 > 0) {
//             console.log('prev');
//             scrollPositionSem2 = scrollPositionSem2 - cardWidthSem2;
//             $(multipleItemCarouselSem2).find('.carousel-inner').animate({ scrollLeft: scrollPositionSem2 }, 600);
//         }
//     });
// } else {
//     $(multipleItemCarouselSem2).addClass('slide');
// }

/** Seattle Semester */

const multipleItemCarouselSeattle = document.querySelector('#carouselSeattleControls');

if (window.matchMedia("(min-width: 576px)").matches) {
    const carouselSeattle = new bootstrap.Carousel(multipleItemCarouselSeattle, {
        interval: false,
    });

    var carouselWidthSeattle = $(multipleItemCarouselSeattle).find('.carousel-inner')[0].scrollWidth;
    var cardWidthSeattle = $(multipleItemCarouselSeattle).find('.carousel-item').width();

    var scrollPositionSeattle = 0;

    $(multipleItemCarouselSeattle).find('.carousel-control-next').on('click', function () {
        if (scrollPositionSeattle < (carouselWidthSeattle - (cardWidthSeattle * 4))) {
            console.log('next');
            scrollPositionSeattle = scrollPositionSeattle + cardWidthSeattle;
            $(multipleItemCarouselSeattle).find('.carousel-inner').animate({ scrollLeft: scrollPositionSeattle }, 600);
        }
    });

    $(multipleItemCarouselSeattle).find('.carousel-control-prev').on('click', function () {
        if (scrollPositionSeattle > 0) {
            console.log('prev');
            scrollPositionSeattle = scrollPositionSeattle - cardWidthSeattle;
            $(multipleItemCarouselSeattle).find('.carousel-inner').animate({ scrollLeft: scrollPositionSeattle }, 600);
        }
    });
} else {
    $(multipleItemCarouselSeattle).addClass('slide');
}


/** Semester 3 */

const multipleItemCarouselSem3 = document.querySelector('#carouselSem3Controls');

if (window.matchMedia("(min-width: 576px)").matches) {
    const carouselSem3 = new bootstrap.Carousel(multipleItemCarouselSem3, {
        interval: false,
    });

    var carouselWidthSem3 = $(multipleItemCarouselSem3).find('.carousel-inner')[0].scrollWidth;
    var cardWidthSem3 = $(multipleItemCarouselSem3).find('.carousel-item').width();

    var scrollPositionSem3 = 0;

    $(multipleItemCarouselSem3).find('.carousel-control-next').on('click', function () {
        if (scrollPositionSem3 < (carouselWidthSem3 - (cardWidthSem3 * 4))) {
            console.log('next');
            scrollPositionSem3 = scrollPositionSem3 + cardWidthSem3;
            $(multipleItemCarouselSem3).find('.carousel-inner').animate({ scrollLeft: scrollPositionSem3 }, 600);
        }
    });

    $(multipleItemCarouselSem3).find('.carousel-control-prev').on('click', function () {
        if (scrollPositionSem3 > 0) {
            console.log('prev');
            scrollPositionSem3 = scrollPositionSem3 - cardWidthSem3;
            $(multipleItemCarouselSem3).find('.carousel-inner').animate({ scrollLeft: scrollPositionSem3 }, 600);
        }
    });
} else {
    $(multipleItemCarouselSem3).addClass('slide');
}