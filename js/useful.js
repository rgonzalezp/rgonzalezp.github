
'use strict';

$(function() {
    
    var $meters = $(".skills");
    var $section = $('#skill');
    var $queue = $({});
    
    function loadDaBars() {
        $meters.each(function() {
            var $el = $(this);
            var origWidth = $el.width();
            $el.width(0);
            $queue.queue(function(next) {
                $el.animate({width: origWidth}, 700, next);
            });
        });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });
    
});


  
    
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, 0);
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, "default");
  });


  document.addEventListener('DOMContentLoaded', function() {
    
  });
