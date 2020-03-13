//Preloader
$(document).ready(() => {
    navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? window.console.log.apply(console, ["\n %c Made with \u2665 by Concept Studio %c %c %c https://conceptstudio.am \n", "color: #000; background: #fd0; padding:5px 0;", "background: #1c1c1c; padding:5px 0;", "background: #1c1c1c; padding:5px 0;", "color: #fff; background: #1c1c1c; padding:5px 0;"]) : window.console && window.console.log("Made with love \u2665 by Concept Studio - https://conceptstudio.am/")
    if ($('.woocommerce-notices-wrapper').children('*').length) {
        $('.login-cont').addClass('error');
        $('.woocommerce-notices-wrapper').addClass('h6').prependTo('.lost_password');

    }

})

var loaded = 0;
var preloaderTime = 600;
$(window).on("load", function () {
    loaded++;
});

$(document).ready(function () {
    // car
    TweenMax.to("#Group_2607", 1, { rotation: -360, repeat: -1, transformOrigin: "50% 50%", ease: Linear.easeNone });
    TweenMax.to("#Group_2606", 1, { rotation: -360, repeat: -1, transformOrigin: "50% 50%", ease: Linear.easeNone });
    TweenMax.to("#Group_1759", 0.3, { rotation: -180, repeat: -1, repeatDelay: 1, transformOrigin: "50% 50%", ease: Linear.easeIn });
    TweenMax.fromTo("#Group_2609", 0.2, { y: 93 }, { y: 95, repeat: -1, transformOrigin: "50% 50%", ease: Linear.easeNone, yoyo: true });

    //road
    TweenMax.set("#Group_2611", { x: '-150%' });
    TweenMax.to("#Group_2611", 1, { x: '150%', repeat: -1, transformOrigin: "50% 50%", ease: Linear.easeIn });

    TweenMax.set('#Line_970', { x: '-150%' });
    TweenMax.to('#Line_970', 1.2, { x: '150%', repeat: -1, transformOrigin: "50% 50%", ease: Linear.easeIn });

    TweenMax.set('#Line_970-5', { x: '-150%' });
    TweenMax.to('#Line_970-5', 0.8, { x: '150%', repeat: -1, transformOrigin: "50% 50%", ease: Linear.easeIn });

    var WindowIsAlreadyLoad = setInterval(function () {
        if (loaded == 1) {
            afterPreloader();
            clearInterval(WindowIsAlreadyLoad);
            return;
        }
    }, 1500);
});

function afterPreloader() {
    // car
    TweenMax.to("#Group_2607", 0.3, {x: -800, rotation: -360, delay: 0.3, transformOrigin: "50% 50%", ease: Linear.easeNone });
    TweenMax.to("#Group_2606", 0.3, {x: -800, rotation: -360, delay: 0.3, transformOrigin: "50% 50%", ease: Linear.easeNone });
    TweenMax.to("#Group_1759", 0.3, {x: -800,  delay: 0.3, transformOrigin: "50% 50%", ease: Linear.easeIn });
    TweenMax.to("#Group_2609", 0.3, { x: -800, delay: 0.3, transformOrigin: "50% 50%", ease: Linear.easeNone});

    TweenLite.fromTo(".preloader-cont", 0.2, { autoAlpha: 1 }, { delay: 0.4, autoAlpha: 0, ease: Linear.easeIn });

    setTimeout(() => {
        TweenMax.killAll();
        $('html').removeClass('no-scroll')
        $('.preloader-cont').remove();

        //Home
        if ($('body').hasClass('page-template-front-page')) {
            $('.banner-section .image, .banner-section .wrapper').addClass('anim');
            $('.truck').addClass('anim');

            setTimeout(function () {
                $('.turbine-fan').addClass('anim');
            }, 40)
        }

        //How it works
        if ($('body').hasClass('page-template-how-it-works')) {
            $('.steps').removeClass('loaded');
        }

        //Blog
        if ($('body').hasClass('page-template-blog')) {
            if ($(window).width() > 1200) {
                $('.wrapper').removeClass('loaded');
            }
        }
    }, 1000)
};

//Account Navigation
$(document).ready(function () {
$('.account-nav-header').on('click', function () {
    $(this).closest('.woocommerce-MyAccount-navigation').toggleClass('open-nav');
})

if($('.woocommerce-checkout').length) {
    $('.showlogin').on('click', function(e) {
        e.stopPropagation();
        $('.login-cont').toggleClass('show');
    })
}
})

/************FAQ*********************/
$(document).ready(function () {
$('.question').click(function () {
    $(this).closest('.faq-item').toggleClass('active');
})

$(function () {
    var animateTime = 100,
        navLink = $('.question');
    navLink.click(function () {
        var nav = $(this).siblings('.answer');
        if (nav.height() === 0) {
            autoHeightAnimate(nav, animateTime);
        } else {
            nav.stop().animate({ height: '0' }, animateTime);
        }
    });
})
/************END*********************/

    $('.qtranxs-lang-menu-item').removeClass('blue');
    $('.current-menu-item').addClass('blue')
})

$('.burger').click(function () {
$('header').toggleClass('open');
$('html, body').toggleClass('active');
})

//Animtion for section trasforms

function animSection(section, hgtArg) {
if ($(window).scrollTop() + $(window).height() > section.offset().top + section.outerHeight(true) * hgtArg) {
    section.removeClass('loaded');
}
}

$('.partners-cont').slick({
dots: false,
arrows: false,
slidesToShow: 6,
slidesToScroll: 1,
autoplay: true,
responsive: [
    {
        breakpoint: 740,
        settings: {
            slidesToShow: 4
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2
        }
    }
]
});

/* Function to animate height: auto */
function autoHeightAnimate(element, time) {
var curHeight = element.outerHeight(), // Get Default Height
    autoHeight = element.css('height', 'auto').outerHeight(); // Get Auto Height
element.outerHeight(curHeight); // Reset to Default Height
element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}
//*************************PRODUCTS **************************************/
function maxHeight() {
var customHeight = $('.prod-wrapper.custom').height();
var highest = 0;
var highest132 = 0;

$('.prod-wrapper').each(function () {
    var height = $(this).outerHeight();
    if (highest < height) {
        highest = height;
    }
})
$('.products').height(highest);

if ($(window).width() > 481) {
    $('.prod-wrapper').not('.custom').find('.product').each(function () {
        var height = $(this).height();
        if (highest < height) {
            highest = height;
        }
        $(this).height(highest);
    })
}

$('.prod-wrapper.active .subtitle').each(function () {
    var height123 = $(this).outerHeight();
    if (highest132 < height123) {
        highest132 = height123;
    }
})
$('.prod-wrapper.active .subtitle').height(highest132);
};

function transition() {
var offTop = [];
var scrollTop = $(window).scrollTop();
var winHalfHeight = $(window).height() / 2;
$('.section').each(function (i) {
    offTop.push($(this).offset().top);
    if (offTop[i] <= scrollTop + winHalfHeight) {
        $(this).addClass('transition');
    }
});
}

var stop = 1;
$('.head-title').click(function () {
if (stop == 1) {
    stop = 0;
    var data = $(this).data('id');
    $('.head-title').removeClass('active');
    $('.prod-wrapper').removeClass('active');
    $('.prod-wrapper').addClass('top');
    setTimeout(function () {
        $('.prod-wrapper').removeClass('top');
        stop = 1;
    }, 300);
    $('.product').each(function () {
        if (data == $(this).data('id')) {
            $(this).closest('.prod-wrapper').removeClass('top');
            $(this).closest('.prod-wrapper').addClass('active');
        }
    })
    $(this).addClass('active');
    var leftPosition = $(this).position().left;
    $('.background').animate({
        left: leftPosition
    }, 300);
    if ($(window).width() > 479) {
        maxHeight();
    }
}
})
$(document).ready(function () {
if ($('.head-title.active').length) {
    var leftPosition = $('.head-title.active').position().left;
    $('.background').css('left', leftPosition);
}
if ($(window).width() > 479) {
    maxHeight();
}
transition()
})
$(window).resize(function () {
if ($(window).width() > 479) {
    maxHeight();
}
})
$(window).scroll(function () {
transition()
})

//*************************END **************************************/
//*************************Blog **************************************/
if ($('body').hasClass('page-template-blog')) {

jQuery(function ($) {
    $('.load-more').click(function () {
        var loading = 'Loading...';
        var data = {
            'action': 'loadmore',
            'query': true_posts,
            'page': current_page,
        };
        $.ajax({
            url: ajaxurl, // Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸Ðº
            data: data, // Ð´Ð°Ð½Ð½Ñ‹Ðµ
            type: 'GET',
            success: function (data) {
                if (data) {
                    var text = 'load more';
                    $('.load-more span').text(text);
                    $('.posts').append(data); // Ð²ÑÑ‚Ð°Ð²Ð»ÑÐµÐ¼ Ð½Ð¾Ð²Ñ‹Ðµ Ð¿Ð¾ÑÑ‚Ñ‹
                    current_page++; // ÑƒÐ²ÐµÐ»Ð¸Ñ‡Ð¸Ð²Ð°ÐµÐ¼ Ð½Ð¾Ð¼ÐµÑ€ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹ Ð½Ð° ÐµÐ´Ð¸Ð½Ð¸Ñ†Ñƒ
                    if (current_page >= max_pages) {
                        $(".load-more").remove(); // ÐµÑÐ»Ð¸ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½ÑÑ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°, ÑƒÐ´Ð°Ð»ÑÐµÐ¼ ÐºÐ½Ð¾Ð¿ÐºÑƒ
                    }
                } else {
                    $('.load-more').remove(); // ÐµÑÐ»Ð¸ Ð¼Ñ‹ Ð´Ð¾ÑˆÐ»Ð¸ Ð´Ð¾ Ð¿Ð¾ÑÐ»ÐµÐ´Ð½ÐµÐ¹ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹ Ð¿Ð¾ÑÑ‚Ð¾Ð², ÑÐºÑ€Ð¾ÐµÐ¼ ÐºÐ½Ð¾Ð¿ÐºÑƒ
                }
            }
        });
    });
});

if ($(window).width() > 1200) {
    $(window).scroll(function () {
        $('.single-blog').each(function () {
            if ($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).height() * 0.15) {
                $(this).addClass('loaded');
            }
        })
    })
}
}

//*************************End**************************************/
//*************************Blog-individual**************************************/
if ($('body').hasClass('single')) {
if ($(window).width() > 1200) {
    let related = $('.bottom-part').find('section'),
        relatedHgt = related.height(),
        relatedOfTop = related.offset().top;
    $('.bottom-part').find('section').addClass('loaded');

    $(window).on('load', function () {
        $('.wrap').removeClass('loaded');
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > relatedOfTop + relatedHgt / 2) {
            $('.bottom-part').find('section').removeClass('loaded');
        }
    })
}
}

//*************************End**************************************/
//*************************How it work**************************************/
if ($('body').hasClass('page-template-how-it-works')) {

// if ($(window).width() > 1200) {
$(window).scroll(function () {
    animSection($('.materials'), 0.3);
    animSection($('.facts'), 0.7);
    animSection($('.product-section'), 0.5);
})
// }
}
//*************************End**************************************/


var mafs = $("#my-ajax-filter-search");
var mafsForm = mafs.find("form");

mafsForm.submit(function (e) {
e.preventDefault();

$('.pickup-result').addClass('hide');

if (mafsForm.find("#zip").val().length !== 0) {
    $('#zip').removeClass('error');
    var zip = mafsForm.find("#zip").val();
}
else{
    $('#zip').addClass('error');
    $('#zip').attr('placeholder', 'Please fill a correct zip code');
}
if (mafsForm.find("#plan").val().length !== 0) {
    $('#plan').removeClass('error');
    var plan = mafsForm.find("#plan").data('val');
}
else{
    $('#plan').addClass('error');
    $('#plan').attr('placeholder', 'Please select a subscription plan');
}
var data = {
    action: "my_ajax_filter_search",
    zip: zip,
    plan: plan,
}

if (mafsForm.find("#plan").val().length !== 0 && mafsForm.find("#zip").val().length !== 0) {
    $.ajax({
        url: ajaxurl, // Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸Ðº
        data: data, // Ð´Ð°Ð½Ð½Ñ‹Ðµ
        type: 'GET',
        success: function (data) {
            if (data) {
                setTimeout(function () {
                    $('.pickup-result').slick('removeSlide', null, null, true).slick('destroy').append(data).slick({
                        dots: false,
                        arrows: false,
                        slidesToShow: 6,
                        swipeToSlide: true,
                        slidesToScroll: 6,
                        autoplay: false,
                        infinite: false,
                        responsive: [
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 3
                                }
                            }
                        ]
                    });

                    if ($('.pickup-result').hasClass('hide')) {
                        $('.pickup-result').removeClass('hide');
                    }
                }, 500)
            }
            else{
                $('#zip').addClass('error');
                $('#zip').val('');
                $('#zip').attr('placeholder', 'Please fill a correct zip code');
            }
        }
    });
}

// we will add codes above this line later
});

//***************************Pickup***********************************/
if ($('body').hasClass('page-template-pickup')) {
$('.pickup-result').slick({
    dots: false,
    arrows: false,
    slidesToShow: 6,
    swipeToSlide: true,
    slidesToScroll: 6,
    autoplay: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});
//pickup
$(function () {
    var nav = $('.inputs'),
        animateTime = 500,
        navLink = $('.plan-input,.inputs input');
        navLink.click(function () {
            if (nav.height() === 0) {
                autoHeightAnimate(nav, animateTime);
                $('.sub-cont').addClass('active overflow');
            } else {
                nav.stop().animate({ height: '0' }, animateTime);
                $('.sub-cont').removeClass('active');
                setTimeout(function () {
                    $('.sub-cont').removeClass('overflow');
                }, animateTime)
            }
        });
})
$('.inputs input').click(function(){
    $('.plan-input').val($(this).val());
    $('.plan-input').data('val', $(this).data('val'));
})
function getCoords(e) {
    if ($(window).width() > 1200) {
        let xCoord = e.clientX;
        let yCoord = e.clientY;
        $('.cursor').fadeIn(200);
        $('.cursor').css({ 'transform': 'translate(-50%, -50%) matrix(1, 0, 0, 1, ' + xCoord + ', ' + yCoord + ')' });
    }
}

$('.pickup-result').mousemove(function (e) {
    if ($('.cursor').length === 0) {
        $('.pickup').append("<div class='cursor'><span class='circle'></span></div>");
    }

    getCoords(e);
})

$('.pickup-result').mouseleave(function () {
    $('.cursor').fadeOut(200);
    // 	$('.cursor').remove();
})

$('.pickup-result').on('mousedown', function () {
    $('.cursor').addClass('active');
})

$('.pickup-result').on('mouseup', function () {
    $('.cursor').removeClass('active');
})

$(document).on('click', function(e){
    if ($(e.target).hasClass('plus')) {
        if ($(e.target).attr('data-count') == 1) {
            $('.plus').closest('.image').find('img').addClass('transform1');
            $('.buttons div').attr('data-count', Number($('.plus').attr('data-count')) + 1);
            dragmap();
        }
        else if ($(e.target).attr('data-count') == 2) {
            $('.plus').closest('.image').find('img').addClass('transform2');
            $('.buttons div').attr('data-count', Number($('.plus').attr('data-count')) + 1);
            dragmap();
        }
    }
    else if ($(e.target).hasClass('minus')) {
        if ($(e.target).attr('data-count') == 3) {
            $('.plus').closest('.image').find('img').removeClass('transform2');
            $('.buttons div').attr('data-count', Number($('.plus').attr('data-count')) - 1);
            dragmap();
        }
        else if ($(e.target).attr('data-count') == 2) {
            $('.plus').closest('.image').find('img').removeClass('transform1');
            $('.buttons div').attr('data-count', Number($('.plus').attr('data-count')) - 1);
        }
    }
})

var imgCont = new TouchScroll();
imgCont.init({
    id: 'imgCont',
    draggable: true,
    wait: false
});

function ContHeight(){
    var contWidth = $('#imgCont').width();
    var contHeight = $('#imgCont').width() * 0.55;
    $('#imgCont').height(contHeight);
}

$(document).ready(function(){
    ContHeight();
})
$(window).resize(function(){
    ContHeight();
})
}
//******************************End***********************************/
//******************************home***********************************/
if ($('body').hasClass('page-template-front-page')) {
$(window).scroll(function () {
    animSection($('.steps'), 0.4);
    animSection($('.product-section'), 0.4);
    animSection($('.news-section'), 0.4);
})
}
//******************************End***********************************/
//******************************Checkout***********************************/
$(document).ready(function () {
var de = window.location.pathname.substr(0,4);
if ($('body').hasClass('woocommerce-checkout') && de == '/de/') {
    $('.subscription-details').text('am 1. jedes dritten Monats')
}
})
//******************************End***********************************/
$('.woocommerce-checkout, .woocommerce-form-register').on('submit', function(e){
 if(!$(e.target).hasClass('login')){
    var elems = $('.validate-required input, .validate-required select ');
    $('.validate-required').removeClass('woocommerce-invalid')
    elems.each(function(){
         if($(this).val() == ''){
             e.preventDefault()
             $(this).closest('.validate-required').addClass('woocommerce-invalid');
         }
    })
 }
})

$(window).on('load', function(){
if($('#billing_address_2_field').length > 0){
    $('#billing_address_2_field').addClass('validate-required');
    $('#billing_address_2_field .optional').text('*');
}
if($('body').hasClass('woocommerce-checkout')){
    if($('.woocommerce-form-login').hasClass('error')){
        $('.woocommerce-form-login').addClass('show')
    }
    var url = window.location.href;
    if(url.indexOf('/de/')>0){
        $('#additional_box_field label').text('Name auf dem Briefkasten fÃ¼r die SammelsÃ¤cke *');
        $('#additional_bags_pickup_field label').text('Wo kannst Du die SÃ¤cke platzieren? *');
        $('#order_comments_field label').text('Andere Informationen (wahlweise)');
        $('#additional__field label').text('Wie hast Du von uns gehÃ¶rt? (wahlweise)');

        //User fields
        $('#street_field label').text('Strasse, Nr. *');
        $('#postcode_field label').text('Postleitzahl *');
        $('#place_field label').text('Ort *');
        $('#phone_field label').text('Mobilnummer (Erinnerungs-SMS) *');
        $('#date_birth_field label').text('Geburtsdatum *');
        $('#salutation_field label').text('Anrede *');
        $('#email_field label').text('Email *');
        $('#account_password_field label').text('Kennwort *');
        $('#account_password-2_field label').text('Kennwort wiederholen *');
        $('#account_username_field label').text('Benutzername *');

        //Billing Fields

        $('#billing_country_field label').text('Land *');
        $('#billing_first_name_field label').text('Vorname *');
        $('#billing_last_name_field label').text('Nachname *');
        $('#billing_company_field label').text('Firmenname ');
        $('#billing_address_1_field label').text('Addresse *');
        $('#billing_address_2_field label').text('Wohnungsnummer *');
        $('#billing_city_field label').text('Ort *');
        $('#billing_state_field label').text('Kanton *');
        $('#billing_postcode_field label').text('PLZ *');
        $('#billing_email_field label').text('Emailadresse *');
        $('#billing_phone_field label').text('Telefon *');

        $('#place_order').text('Jetzt Anmelden');
    }
}
})

//********************************* cookies *********************************//
// var hours = 168*60*60*1000; // Reset when storage is more than 1 week
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
$('.cookies .close').click(function(){
    $('.cookies').remove();
})
$('.cookies .got').click(function(){
    localStorage.clear();
    localStorage.setItem('setupTime', now);
    $('.cookies').remove();
})
$(document).ready(function(){
    if(!setupTime){
        localStorage.clear();
        $('.cookies').addClass('active');
    }
});
//********************************* End *********************************//
$(window).scroll(function(){
if( $('.site-footer').offset().top - (window.scrollY + $(window).height())  <= 0){
    $('.siq_bR').css('bottom', '17%');
}else{
    $('.siq_bR').css('bottom', '10px');

}
})

$(window).on('load',function(){
var url  = window.location.href;
// var hh = new URL(url);
if(url.indexOf('add-to-cart')>-1 || url.indexOf('product')>-1)
{
    window.location.replace('/checkout');
}
})

// $(document.body).on('applied_coupon', function(){
// 	console.log(123);
//     $.ajax({
//         type:       'POST',
//         url:        ajaxurl,
//         data:       {action:'check_for_coupon'},
//         success:    function( result ) {
//         	$('.product-total .discount').html(result);
//         }
//     });
// });
// $( "body" ).on( 'applied_coupon', function(event, coupon){
//     	console.log()
//         // Example: Displaying an alert message with the applied coupon code
//         alert('Applied coupon code: "' + coupon + '"\n' + 'Event type: "' + event.type + '"');
//     });
// jQuery(function($){
//     $( "body" ).on( 'applied_coupon', function(event, coupon){
//     	cn
//         // Example: Displaying an alert message with the applied coupon code
//         alert('Applied coupon code: "' + coupon + '"\n' + 'Event type: "' + event.type + '"');
//     });
// });

