$(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
    var elems = $(".sr-icons");
    if (elems.hasClass("active"))
        return;

        // Start the animation
        elems.each(function (index,elem) {
          console.log(elem)
        if (isElementInViewport(elem)) {
            $(this).delay(index * 200).queue(function (nxt) {
                $(this).addClass("active");
                nxt();
            });
          }
        });
    let type = $(".typewriter");
    if (isElementInViewport(type)) {
        $(".typewriter").addClass("active");
    }
});
  
  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 48
  });
  function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );

   
    
}
$(document).ready(function(){
    $('.parallax').parallax();
  });
var instance = M.Parallax.getInstance(elem);
    
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });