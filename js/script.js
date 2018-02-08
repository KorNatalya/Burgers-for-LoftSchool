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

const fullPageNav = document.querySelector('#navTab'),
      openMenu = document.querySelector('#openMenu');

const minLeft = -100,
      maxLeft = 0;
const step = 100;

let currentLeft = -100;



openMenu.addEventListener('click', function () {
    if (currentLeft < maxLeft) {
        currentLeft += step;
        fullPageNav.style.left = currentLeft + '%';
    }
});

hide.addEventListener('click', function () {
   if (currentLeft >= maxLeft) {
       currentLeft -= step;
       fullPageNav.style.left = currentLeft + '%';
   }
});


// АККОРДЕОН Вертикальный

// const teamActive = 'team-acco__item--active';
// let team = 'team-acco__item';
// let accoTrigs = document.querySelectorAll('.team-acco__trigger');
//
// // console.log(accoTrigs);
//
// for (let accoTrig of accoTrigs) {
//     accoTrig.addEventListener('click', function (event) {
//         if (team === event.target.parentNode.className) {
//             event.target.parentNode.classList = teamActive;
//         }
//         else {
//             event.target.parentNode.classList = team;
//         }
//     });
// }


$(function(){
    $('.team-acco__trigger').on('click', function(e){
        e.preventDefault();
        let $this = $(this),
            container = $this.closest('.team-acco'),
            item = $this.closest('.team-acco__item'),
            items = container.find('.team-acco__item'),
            activeItem = items.filter('.team-acco__item--active'),
            content = item.find('.team-acco__content'),
            activeContent = activeItem.find('.team-acco__content');

        if (!item.hasClass('team-acco__item--active')) {
            items.removeClass('team-acco__item--active');
            item.addClass('team-acco__item--active');
            activeContent.animate({
                'height' : '0px'
            });
            content.animate({
                'height' : '190px'
            });
        } else {
            item.removeClass('team-acco__item--active');
            content.animate({
                'height' : '0px'
            });
        }
    });

    $(document).on('click', function (e) {
        let $this = $(e.target);
        if (!$this.closest('.team').length) {
            $('.content').animate({
                'height' : '0px'
            });
            $('.item').removeClass('team-acco__item--active');
        }
    });
});

// АККОРДЕОН горизонтальный

$(function(){
    $('.menu-acco__trigger').on('click', function(e){
        e.preventDefault();
        let $this = $(this),
            container = $this.closest('.menu-acco'),
            item = $this.closest('.menu-acco__item'),
            items = container.find('.menu-acco__item'),
            activeItem = items.filter('.menu-acco__item--active'),
            content = item.find('.menu-acco__content');
            // activeContent = activeItem.find('.menu-acco__content');

        if (!item.hasClass('menu-acco__item--active')) {
            items.removeClass('menu-acco__item--active');
            item.addClass('menu-acco__item--active');
            activeContent.animate({
                'width' : '0px'
            });
            content.animate({
                'width' : '540px'
            });
        } else {
            item.removeClass('menu-acco__item--active');
            content.animate({
                'width' : '0px'
            });
        }
    });

    // $(document).on('click', function (e) {
    //     let $this = $(e.target);
    //     if (!$this.closest('.menu-acco__item--active').length) {
    //         $('.content').animate({
    //             'width' : '0px'
    //         });
    //         $('.item').removeClass('menu-acco__item--active');
    //     }
    // });
});



