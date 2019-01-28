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
    $('.left-btn').click(function() {
        $('.left-btn').css({
            backgroundColor: '#2f2f3f'
        });
    });
    $('.right-btn').click(function() {
        $('.right-btn').css({
            backgroundColor: '#2f2f3f'
        });
    });
    $('.left-btn img').click(function() {
        $('.left-btn').css({
            backgroundColor: '#2f2f3f'
        });
    });
    $('.right-btn img').click(function() {
        $('.right-btn').css({
            backgroundColor: '#2f2f3f'
        });
    });
})