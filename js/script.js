$(document).ready(function () {
    // SLIDER

// const left = document.querySelector("#left"),
//       right = document.querySelector("#right"),
//       items = document.querySelector("#items");
//
// const minRight = 0,
//       // maxRight = 4700,
//     maxRight = 1880, //Изменить при добавлении слайдов
//       step = 940;//Изменить при добавлении слайдов на 940
//
// let currentRight = 0;
//
// right.addEventListener("click", function() {
//     if (currentRight < maxRight) {
//         currentRight += step;
//         items.style.right = currentRight + "px";
//     }
// });
//
// left.addEventListener("click", function() {
//     if (currentRight > minRight) {
//         currentRight -= step;
//         items.style.right = currentRight + "px";
//     }
// });

////////////////

// ПОЛНОЭКРАННОЕ МЕНЮ

    const fullPageNav = document.querySelector('#navTab');
    const maxLeft = 0;
    const step = 100;

    let currentLeft = -100;


    $('#openMenu').on('click', function () {
        if (currentLeft < maxLeft) {
            currentLeft += step;
            fullPageNav.style.left = currentLeft + '%';
        }
    });

    $('#hide').on('click', function () {
        if (currentLeft >= maxLeft) {
            currentLeft -= step;
            fullPageNav.style.left = currentLeft + '%';
        }
    });


// АККОРДЕОН Вертикальный

    $('.team-acco__trigger').on('click', function (e) {
        let $this = $(this);
        let containerT = $this.closest('.team-acco');
        let itemT = $this.closest('.team-acco__item');
        let itemsT = containerT.find('.team-acco__item');
        let activeItemT = itemsT.filter('.team-acco__item--active');
        let contentT = itemT.find('.team-acco__content');
        let activeContentT = activeItemT.find('.team-acco__content');
        e.preventDefault();

        if (itemT.hasClass('team-acco__item--active')) {
            itemT.removeClass('team-acco__item--active');
            contentT.animate({
                'height': '0px'
            });
        } else {
            itemsT.removeClass('team-acco__item--active');
            itemT.addClass('team-acco__item--active');
            activeContentT.animate({
                'height': '0px'
            });
            contentT.animate({
                'height': '190px'
            });
        }
    });

    $('.section .team').on('click', function (e) {
        let target = $(e.target);
        if (!target.closest('.team').length) {
            $('.contentT').animate({
                'height': '0px'
            }, 2000);
            $('.itemT').removeClass('team-acco__item--active');
        }
    });

    $('.team').on('click', function (e) {
        let $this = $(e.target);
        if (!$this.closest('.menu-acco__item--active').length) {
            $('.contentT').animate({
                'width': '0px'
            });
            $('.itemT').removeClass('menu-acco__item--active');
        }
    });

// АККОРДЕОН горизонтальный

    $('.menu-acco__trigger').on('click', function (e) {
        let $this = $(this);
        let containerM = $this.closest('.menu-acco');
        let itemM = $this.closest('.menu-acco__item');
        let itemsM = containerM.find('.menu-acco__item');
        let activeItemM = itemsM.filter('.menu-acco__item--active');
        let contentM = itemM.find('.menu-acco__content');
        let activeContentM = activeItemM.find('.menu-acco__content');

        e.preventDefault();

        if (itemM.hasClass('menu-acco__item--active')) {
            itemM.removeClass('menu-acco__item--active');
            contentM.animate({
                'width': '0px'
            });
        } else {
            itemsM.removeClass('menu-acco__item--active');
            itemM.addClass('menu-acco__item--active');
            activeContentM.animate({
                'width': '0px'
            });
            contentM.animate({
                'width': '350px'
            });
        }
    });

    $('.section .menu').on('click', function (e) {
        let target = $(e.target);
        if (!target.closest('.team').length) {
            $('.contentM').animate({
                'width': '0px'
            }, 2000);
            $('.itemM').removeClass('menu-acco__item--active');
        }
    });

    $('.team .compos__X').on('click', function (e) {
        let $this = $(e.target);
        if (!$this.closest('.menu-acco__item--active').length) {
            $('.contentM').animate({
                'height': '0px'
            });
            $('.itemM').removeClass('menu-acco__item--active');
        }
    });

    //////


    //REWIEWS


    /**
     * @param element
     */
    function create(element = {}) {
        if (element instanceof Object
            && element.hasOwnProperty('name')
        ) {
            let elem = document.createElement(element.name);
            if (element.hasOwnProperty('text')) {
                elem.textContent = element.text;
            }
            if (
                'a' === element.name
                && element.hasOwnProperty('link')
            ) {
                elem.setAttribute('href', element.link);
            }
            if (element.hasOwnProperty('style')) {
                elem.style = element.style;
            }
            if (
                'img' === element.name
                && element.hasOwnProperty('src')
                && element.hasOwnProperty('alt')
            ) {
                elem.src = element.src;
            }
            if (element.hasOwnProperty('value')) {
                elem.value = element.value;
            }
            if (element.hasOwnProperty('className')) {
                elem.className = element.className;
            }
            return elem;
        }
        return create({
            name: 'div',
            text: 'Error!',
        });
    }


    fetch(location.href+'/json/reviews.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            $(json.reviews).each(function (index, value) {
                render(value);
            });
        });

    function render(dataJson) {
        let modal_form = create({
            name: 'div',
            className: 'modal_form'
        });
        let modal_close = create({
            name: 'div',
            className: 'modal_close'
        });
        let img = create({
            name: 'img',
            src: './icons/x_orange.png',
            alt: 'X'
        });
        let modal_form_name = create({
            name: 'p',
            className: 'modal_form_name',
            text: dataJson.name
        });
        let long_text = create({
            name: 'p',
            className: 'long_text',
            text: dataJson.long_text
        });
        let reviews__item = create({
            name: 'li',
            className: 'reviews__item'
        });
        let review = create({
            name: 'div',
            className: 'review'
        });
        let review__picture = create({
            name: 'div',
            className: 'review__picture',
            style: 'background-image: url(' + dataJson.pic + ');'
        });
        let review__hover = create({
            name: 'div',
            className: 'review__hover'
        });
        let review__name = create({
            name: 'div',
            className: 'review__name',
            text: dataJson.name
        });
        let review__text = create({
            name: 'span',
            className: 'review__text',
            text: dataJson.short_text
        });
        let button = create({
            name: 'button',
            value: 'More',
            className: 'button button_color_black button__more'
        });

        $(modal_close).append(img);
        $(modal_form)
            .append(modal_close)
            .append(modal_form_name)
            .append(long_text);

        $(review__hover)
            .append(review__name)
            .append(review__text)
            .append(button);
        $(review)
            .append(review__picture)
            .append(review__hover);
        $(reviews__item).append(review);
        $('.reviews__list').append(reviews__item);
        $('.reviews__list').parent().append(modal_form);
        //МОДАЛЬНОЕ ОКНО В ОТЗЫВАХ
        $('button.button__more').click(function (event) {
            event.preventDefault();
            $('#overlay').fadeIn(300,
                function () {
                    $('.modal_form')
                        .css('display', 'block')
                        .animate({opacity: 1, top: '50%', left: '50%'}, 200);
                });
        });
        // Зaкрытие мoдaльнoгo oкнa
        $('.modal_close, #overlay').click(function () {
            $('.modal_form')
                .animate({opacity: 0, top: '35%'}, 200,
                    function () {
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(300);
                    }
                );
        });
    }
});