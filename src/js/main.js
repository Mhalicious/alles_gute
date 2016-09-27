/*******************************************************************************
 *
 * JavaScript
 *
 ******************************************************************************/

//<!-- Menu -->
'use strict';

(function() {
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('b-menu')[0];
    var burgerContain = document.getElementsByClassName('b-container')[0];
    var burgerNav = document.getElementsByClassName('b-nav')[0];
    var burgerLink = document.getElementsByClassName('b-link')[0];

    burgerMenu.addEventListener('click', function toggleClasses() {
        [body, burgerContain, burgerNav].forEach(function (el) {
            el.classList.toggle('open');
        });

    }, false);
})();

//Scrool to Div
$(function() {
    $('.header .b-nav li a').bind('click',function(event){
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){

	// hide #back-top first
	$(".footer_backTop").hide();
	// fade in ._backTop
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 650) {
				$('.footer_backTop').fadeIn();
			} else {
				$('.footer_backTop').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('.footer_backTop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	});
});


//<!-- Impressum Popup -->
$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
        // type: 'inline',
        // preloader: false,
        // focus: '#username',
        // modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    //Init contact js-file
    //CARE!!!
    //DONT DELETE THIS ONE
    init_contact();
});
