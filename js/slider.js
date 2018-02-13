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

    lis.each(() => {
        maxRight += stepSlide;
    });
    maxRight -= stepSlide;

    $(right).on('click', () => {
        event.preventDefault();
        if (currentRight < maxRight) {
            currentRight += stepSlide;
            list.style.right = currentRight + "px";
        } else {
            currentRight = 0;
            list.style.right = currentRight + "px";
        }
    });

    $(left).on('click', () => {
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