//init paralax comp
(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


//init main slider promotion comp

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  //var instances = M.Slider.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.slider').slider();
});
      

// init floating btn comp

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn','click-to-toggle');
  var instances = M.FloatingActionButton.init(elems, {hoverEnabled:false});
});

// Or with jQuery

$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});
      

// init carrousel comp
var instance = M.Carousel.init({
  fullWidth: false,
  indicators: true
});

// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: false,
  indicators: true
});