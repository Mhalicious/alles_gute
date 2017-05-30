/*******************************************************************************
 *
 * JavaScript
 *
 ******************************************************************************/

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


