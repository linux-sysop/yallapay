$(window).on("load", function () {
    $(".loader .pulse").fadeOut(1000, function () {
        $(".loader").hide()
        $('body').css("overflow-y", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
        if ($(window).width() > 768) {
            $('.main-head').addClass('openStyle');
            setTimeout(() => {
                $('.sec-head').addClass('openStyle');
            }, 1500);
        };
    });

    new WOW().init()

    if ($("div").hasClass("_2nd-div")) {

        //map
        var adresse = "";
        var lat = $("#map-cont").attr("lat");
        var long = $("#map-cont").attr("long");

        var location = [adresse[0], lat, long];

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            overviewMapControl: false,

            center: new google.maps.LatLng(lat, long),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            fullscreenControl: false
        });

        var infowindow = new google.maps.InfoWindow();

        var marker;
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(location[1], location[2]),
            map: map,
            icon: "images/pin.png"
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(location[0]);
                infowindow.open(map, marker);
            }
        })(marker));
    }

});
$(document).ready(function () {
    $('select').selectpicker({
        dropupAuto: false
    });
    if ($(window).width() > 768) {
        $('.main-head').addClass('openStyle');
        setTimeout(() => {
            $('.sec-head').addClass('openStyle');
        }, 1500);

    }
    if ($(window).width() < 768) {

        $(".pay-method img").wrap("<div class='card-img-wrap'></div>");

        $(".img-sec, .available-cards-img").removeClass('fadeInRightBig')
        $(".img-sec, .available-cards-img").removeClass('fadeInLeftBig')
        $(".img-sec, .available-cards-img").addClass('zoomIn')
        $(".available-cards-img").unwrap()
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
    $('.addcart-modal').click(function () {
        $(".modal-cont").fadeIn(400)
        $(".add-modal").addClass("show-modal");
        $("body").addClass("overflow");
    });
    $('.close-add-modal, .modal-cont').click(function () {
        $(".modal-cont").fadeOut(500)
        $(".add-modal").removeClass("show-modal");
        $("body").removeClass("overflow");
    });
    $('.add-modal').click(function (e) {
        e.stopPropagation();
    });
    $('.form-input, .new-credit-input,.depo-input').focus(function () {
        $(this).parent().find(".floating-label").addClass('label-active');
    });

    $(".form-input, .new-credit-input,.depo-input").focusout(function () {
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


    $('.info-card-cont .country-li .country-anchor').click(function () {
        var flag = $('.info-card-cont .flag').html()
        $('.info-card-cont .flag').html($(this).html())
        $('.slected-country-pre').html($(this).html())
        $(this).html(flag)
    });
    $('.bank-li').click(function () {
        var bank = $('.selected-info').html()
        $('.selected-info').html($(this).html())
        $(this).html(bank)
    });

    $('.user').click(function () {
        $('.user-nav-cont').slideToggle(500)
        $('.user').toggleClass("useropen")
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
    $('.countries-cont .country-li').click(function () {
        var flag = $('.countries-cont .conutry').html()
        $('.countries-cont .conutry').html($(this).html())
        $(this).html(flag)

    });



    var a = 0;
    $(window).scroll(function () {

        if (a === 0 && $(this).scrollTop() >= ($(".cards-numbers").offset().top) - 700) {
            $(".loader-span").css("width", "100%");
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            a = 1
        }

    });



    $('.new-credit-input-label .dateinput').datepicker({
        format: "mm/yyyy",
        startView: 1,
        minViewMode: 1,
        maxViewMode: 2
    });

    $(".inputfile").change(function () {
        var file = $('.inputfile')[0].files[0]
        if (file) {
            $(".upload-btn").html(file.name)
        }
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