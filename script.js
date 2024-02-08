// var navTwo = document.getElementById("#nav-two");

// var menu = document.getElementById("#menu")

// function toggle(){
//   navTwo.setAttribute('class','show')
// }

// function hide(){
//   navTwo.setAttribute("class","hide")
// }

var navTwo = document.getElementById("nav-two");
var menu = document.getElementById("menu");

function toggle() {
    if (navTwo.classList.contains("show")) {
        hide();
    } else {
        show();
    }
}

function show() {
    navTwo.setAttribute("class", "show");
}

function hide() {
    navTwo.setAttribute("class", "hide");
}


// ------------------------------ABOUT US SLIDER-------------------
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Change slide every 3 seconds (adjust as needed)
setInterval(nextSlide, 3000);


$(document).ready(function () {
    $('input[type=submit]').click(function () {
      $('input[type=submit]').toggleClass('red');
    });
  });


  


