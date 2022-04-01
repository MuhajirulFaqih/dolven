(function ($) {
    "use strict";
    // Toggler navbar
    $('.nav-toggle').click(function () {
        $('.nav').toggleClass('active')
    })
    $('.nav-close').click(function () {
        $('.nav').toggleClass('active')
    })
    $('.nav a').click(function () {
        $('.nav').toggleClass('active')
    })

    AOS.init({offset: 0, duration: 800});

})(window.jQuery);

$("a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html,body").animate({
                scrollTop: target
                    .offset()
                    .top - 80
            }, 200, 'swing', function () {
                window.location.hash = '';
            });
            return false;
        }
    }
});

$(window).scroll(function () {
    onScroll();
    if ($(this).scrollTop() > ($("#hero").height() - 500)) {
        $('.nav').addClass('sticky');
        $('#navbar .nav-mobile').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky');
        $('#navbar .nav-mobile').removeClass('sticky');
    }
});

function onScroll() {
    var scrollPos = $(document).scrollTop();
    $(".nav ul > li > a").each(function() {
      var currLink = $(this);

      try {
        var refElement = $(currLink.attr("href"));
        if (
          (refElement.position().top - 100) <= scrollPos &&
          (refElement.position().top - 100) + refElement.height() > scrollPos
        ) {
          $(".nav ul > li > a").removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      } catch (e) {
        // Ignore href='javascript:;'
      }
    });
}