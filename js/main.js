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
        $(".img-sec").removeClass('fadeInLeftBig')
        $(".img-sec").addClass('zoomIn')
        $(".other-amount").removeAttr("placeholder")


        $('.mo-menu-open').click(function () {
            $(".xs-nav").addClass("xs-open");
            $("body").toggleClass("overflow");
        });
        $('.close-btn').click(function () {
            $(".xs-nav").removeClass("xs-open");
            $("body").toggleClass("overflow");
        });
    }

    $('.form-input, .new-credit-input').focus(function () {
        $(this).parent().find(".floating-label").addClass('label-active');
    });

    $(".form-input, .new-credit-input").focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().find(".floating-label").removeClass('label-active');
        };
    });
    $('.show_hide').click(function () {
        if ($('.pass-input').attr('type') == 'password') {
            $('.pass-input').attr("type", "text");
            $(".show").hide();
            $(".hide").show();

        } else {
            $('.pass-input').attr("type", "password");
            $(".show").show();
            $(".hide").hide();
        }
    });
    new WOW().init();


    $('.info-card-cont .country-li .country-anchor').click(function () {
        var flag = $('.info-card-cont .flag').html()
        $('.info-card-cont .flag').html($(this).html())
        $('.slected-country-pre').html($(this).html())
        $(this).html(flag)
    });

    $('.radios input[type=radio]').change(function () {
        $('.amount-pre .price').text(this.value)
    });
    $('#email-pre').on('change paste keyup', function () {
        if ($('#email-pre').val() == '') {
            $('.email-pre').text('AlaaAlmahmadi@payers.net')
        } else {
            $('.email-pre').text($('#email-pre').val())
        }
    });
    $('.new-credit-input-label .dateinput').datepicker({
        format: "mm/yyyy",
        startView: 1,
        minViewMode: 1,
        maxViewMode: 2
    });
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