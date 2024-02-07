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


