$(document).ready(function() {
    $('.top-arr-img').click(function() {
        alert('You click on top button')
    });
    $('.left-arr-img').click(function() {
        alert('You click on left button')
    });
    $('.ok-img').click(function() {
        alert('You click on ok button')
    });
    $('.right-arr-img').click(function() {
        alert('You click on right button')
    });
    $('.bottom-arr-img').click(function() {
        alert('You click on bottom button')
    });
    $('.left-btn').mousedown(function() {
        $('.left-btn').css({
            backgroundColor: '#2f2f3f'
        });
    });
    $('.right-btn').mousedown(function() {
        $('.right-btn').css({
            backgroundColor: '#2f2f3f'
        });
    });
    $('.left-btn').mouseup(function() {
        $('.left-btn').css({
            backgroundColor: '#1d1d27'
        });
    });
    $('.right-btn').mouseup(function() {
        $('.right-btn').css({
            backgroundColor: '#1d1d27'
        });
    });
    $('.left-btn img').mousedown(function() {
        $('.left-btn').css({
            backgroundColor: '#2f2f3f'
        });
    });
    $('.right-btn img').mousedown(function() {
        $('.right-btn').css({
            backgroundColor: '#2f2f3f'
        });
    });
    $('.left-btn img').mouseup(function() {
        $('.left-btn').css({
            backgroundColor: '#2f2f3f'
        });
    });
    $('.right-btn img').mouseup(function() {
        $('.right-btn').css({
            backgroundColor: '#2f2f3f'
        });
    });
})