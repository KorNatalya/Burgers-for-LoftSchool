// (function () {
//     var navXlink = document.querySelector('.nav-x__link');
//     var navX = document.querySelector('.nav-x');
//     var welcomeContent = document.querySelector('.welcome__content');
//     var hambMenu = document.querySelector('.hamb-menu');
//     var navBtn = document.querySelector('.nav-btn');
//     var navList = document.querySelector('.nav__list');
//     var arrow = document.querySelector('.arrow');
//
//
//     hambMenu.addEventListener('click', function () {
//         hide(hambMenu);
//         hide(navBtn);
//         hide(arrow);
//         hide(welcomeContent);
//         show(navX);
//         show(navList);
//
//     });
//
//
//     navXlink.addEventListener('click', function () {
//         hide(navX);
//         show(welcomeContent);
//
//         hide(navList);
//         show(hambMenu);
//         show(navBtn);
//         show(arrow);
//     });
//
//
//     function show(el) {
//         console.log(el.classList);
//         el.classList.remove('hide');
//         console.log(el.classList);
//     }
//
//     function hide(el) {
//         // console.log(el);
//         el.classList = 'hide';
//     }
//
//
// })();


// SLIDER

// const left = document.querySelector("#left"),
//       right = document.querySelector("#right"),
//       items = document.querySelector("#items");
//
// const minRight = 0,
//       // maxRight = 4700,
//     maxRight = 940, //Изменить при добавлении слайдов
//       step = 0;//Изменить при добавлении слайдов на 940
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

const fullPageNav = document.querySelector('#navTab');
const openMenu = document.querySelector('#openMenu');
const hide = document.querySelector('#hide');

const minLeft = -100;
const maxLeft = 0;
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







// const minLeft = -100;
// const normLeft = 0;
//
// let currentLeft = -100;
// let stepToRight = 100;
//

//document.getElementById(navTab);




//composition
// let composBtn = document.querySelectorAll(".compos__btn");
// console.log(composBtn.length);
// let composInfo = document.querySelectorAll(".compos__info");


    // console.log(item);
    // composBtn.addEventListener('click', function () {
    //     for (let value of composInfo) {
    //         value.style.opacity = '1';
    //     }
    // });




