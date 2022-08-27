$(document).on("click","a",function(e){
    e.preventDefault();
    var id = $(this).attr("href"),
        topSpace = 90;
    $('html, body').animate({
      scrollTop: $(id).offset().top - topSpace
    }, 500);
});


var navMeniuselected = document.getElementsByClassName("nav-meniu-links");
for (var i = 0; i < navMeniuselected.length; i++) {
    navMeniuselected[i].addEventListener("click", clicked);
    function clicked(){
      for (var i = 0; i < navMeniuselected.length; i++) {
        navMeniuselected[i].classList.remove("selected");
      }
      this.classList.add("selected");
    }
}

var burger = document.querySelector(".navigation .navigation-box .hamburger");
var navMeniu = document.querySelector(".navigation .navigation-box .side-meniu ");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMeniu.classList.toggle("active");
})
document.querySelectorAll(".navigation .navigation-box .side-meniu a")
.forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    navMeniu.classList.remove("active");
}))

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 130;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active-scroll");
      
    } else {
      reveals[i].classList.remove("active-scroll");
    }
  }
}window.addEventListener("scroll", reveal);
