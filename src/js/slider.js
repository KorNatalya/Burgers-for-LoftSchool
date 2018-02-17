// SLIDER
$(document).ready(() => {
    let left = document.querySelector(".slider__arrow--prev");
    let right = document.querySelector(".slider__arrow--next");
    let list = document.querySelector(".slider__list");

    let minRight = 0;
    let maxRight = 0;
    let lis = $("li.slider__item");
    let stepSlide = lis.width(); //940;
    let currentRight = 0;

    let composOpen = () => {
        $('.compos-btn').on('click', (event) => {
            $('.compos__info').fadeIn(200);
            console.log(event.currentTarget);
        });
    };

    /**
     * Закрытие окна с составом
     */
    let composClose = () => {
        $('.compos__X').on('click', () => {
            $('.compos__info').fadeOut(200);
                // .animate({opacity: 0, top: '35%'}, 200,
                //     () => {
                //         $(this).css('display', 'none');
                //     }
                // );
        });
    };

    // composOpen();
    // composClose(); // создание обработчиков для кнопки compos__X

    lis.each(() => {
        maxRight += stepSlide;
    });
    maxRight -= stepSlide;

    $(right).on('click', (event) => {
        event.preventDefault();
        if (currentRight < maxRight) {
            currentRight += stepSlide;
            list.style.right = currentRight + "px";
        } else {
            currentRight = 0;
            list.style.right = currentRight + "px";
        }
    });

    $(left).on('click', (event) => {
        event.preventDefault();
        if (currentRight > minRight) {
            currentRight -= stepSlide;
            list.style.right = currentRight + "px";
        } else {
            currentRight = maxRight;
            list.style.right = currentRight + "px";
        }
    });
});