$(window).on("load", function () { });
$(document).ready(function () {
    if ($(window).width() > 768) {
        $('.main-head').addClass('openStyle');
        setTimeout(() => {
            $('.sec-head').addClass('openStyle');
        }, 1500);
    }
    if ($(window).width() < 768) {
        $(".img-sec").removeClass('fadeInRightBig')
        $(".img-sec").addClass('zoomIn')


        $('.mo-menu-open').click(function () {
            $(".xs-nav").addClass("xs-open");
            $("body").toggleClass("overflow");
        });
        $('.close-btn').click(function () {
            $(".xs-nav").removeClass("xs-open");
            $("body").toggleClass("overflow");
        });
    }

    new WOW().init();
});



$(function () {
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});