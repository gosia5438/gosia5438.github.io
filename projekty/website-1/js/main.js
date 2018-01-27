'use strict';

$(function(){
    
    $(window).scroll(function(){
        var win = $(window);
        if( win.scrollTop() >= 500){
            $('#main-nav').addClass('scroll');
        } else {
            $('#main-nav').removeClass('scroll');
        }
    });
});


$('#carouselExampleControls').carousel({
    interval: 1600,
});