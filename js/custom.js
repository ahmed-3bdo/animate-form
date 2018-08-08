/*global $*/
$(function () {
    "use strict";

    /* label focus */
    $('form .control-form').on('focusout', function (){
        if ($(this).val() != '' ) {
            $(this).parent().addClass('has-data');
        } else {
            $(this).parent().removeClass('has-data');
        }
    });

    /* Sign Animation */
    $('.sin-form #sup-button').on('click', function () {
        $('.sin-form').animate({
            left: '60%',
            marginTop: '3vh',
            zIndex: '1',
            zoom: '1.2'
        }).animate({
            left: '50%',
            marginTop: '0',
            zoom: '1'
        });
        $('.sup-form').animate({
            left: '40%',
            marginTop: '10vh',
            zIndex: '2'
        }).animate({
            left: '50%',
            marginTop: '0'
        });
    });
    
    $('.sup-form #sin-button').on('click', function () {
        $('.sup-form').animate({
            left: '40%',
            marginTop: '3vh',
            zIndex: '1',
            zoom: '1.2'
        }).animate({
            left: '50%',
            marginTop: '0',
            zoom: '1',
            zIndex: '1'
        });
        $('.sin-form').animate({
            left: '60%',
            marginTop: '10vh',
            zIndex: '2'
        }).animate({
            left: '50%',
            marginTop: '0'
        });
    });
});