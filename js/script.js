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


// АККОРДЕОН

const teamActive = 'team-acco__item--active';
let team = 'team-acco__item';
let accoTrigs = document.querySelectorAll('.team-acco__trigger');

// console.log(accoTrigs);

for (let accoTrig of accoTrigs) {
    accoTrig.addEventListener('click', function (event) {
        if (team === event.target.parentNode.className) {
            event.target.parentNode.classList = teamActive;
        }
        else {
            event.target.parentNode.classList = team;
        }
    });
}









