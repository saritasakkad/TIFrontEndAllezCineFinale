$(document).ready(function () {

    // BANNER SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

$('.prev').on('click',function(e){
    e.preventDefault();
    plusSlides(-1);
})

$('.next').on('click',function(e){
    e.preventDefault();
    plusSlides(1);
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";

}

// HIDE FEATURED SECTION

document.getElementById("plusFilmBtn").addEventListener("click", function() {
    var x = document.getElementById("hidden");
    if (x.style.display === ''){
    x.style.display = 'none';
    }
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});

    document.getElementById("plusFilmBtn").addEventListener("click", function() {
        if (this.value=="Plus de Films") {
            this.value = "Moins de Films";
        } else  {
            this.value = "Plus de Films";
        }
    });

// HIDDEN SERIES SECTION
document.getElementById("plusSeriesBtn").addEventListener("click", function() {
    var s = document.getElementById("hiddenSeries");
    if (s.style.display === ''){
    s.style.display = 'none';
    }
    if (s.style.display === "none") {
        s.style.display = "block";
    } else {
        s.style.display = "none";
    }
});
document.getElementById("plusSeriesBtn").addEventListener("click", function() {
    if (this.value=="Plus de Series") {
        this.value = "Moins de Series";
    } else  {
        this.value = "Plus de Series";
    }
});



// ancrage html js
$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
 }
);
// // COOKIE
// if (checkCookie("cookie_name") != "true") {
//     $('.cookie').show();
// }
// $('.cookieClose').on('click', function () {
//     addCookie("cookie_name", "true", 365);
//     $('.cookie').hide();
//     return false;
// });
//
// function addCookie(cookieName, value, days) {
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//         var expires = "; expires=" + date.toGMTString();
//     }
//     else var expires = "";
//     document.cookie = cookieName + "=" + value + expires + "; path=/";
// }
// function checkCookie(cookieName) {
//     var name = cookieName + "=";
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//         if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
//     }
//     return false;
// }
