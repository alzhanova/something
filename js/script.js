$(document).ready(function() {
    $('.left-btn')
        .on('touchstart', function() {
            $(this).css({ backgroundColor: '#2f2f3f' });
        })
        .on('touchend', function() {
            $(this).css({ backgroundColor: '#1d1d27' });
        })
    $('.right-btn')
        .on('touchstart', function() {
            $(this).css({ backgroundColor: '#2f2f3f' });
        })
        .on('touchend', function() {
            $(this).css({ backgroundColor: '#1d1d27' });
        })
    $('.left-arr svg path')
        .on('touchstart', function() {
            $(this).css({ fill: '#ff1f52' });
        })
        .on('touchend', function() {
            $(this).css({ fill: '#fff' });
        })
    $('.right-arr svg path')
        .on('touchstart', function() {
            $(this).css({ fill: '#ff1f52' });
        })
        .on('touchend', function() {
            $(this).css({ fill: '#fff' });
        })
    $('.center svg path')
        .on('touchstart', function() {
            $(this).css({ fill: '#ff1f52' });
            $('.center svg path .cls-1').css({ fill: '#ff1f52' });
            $('.center svg path .cls-2').css({ fill: '#ff1f52' });
            $('.center svg path .cls-3').css({ fill: '#ff1f52' });
        })
        .on('touchend', function() {
            $(this).css({ fill: '#fff' });
            $('.center svg path .cls-1').css({ fill: '#fff' });
            $('.center svg path .cls-2').css({ fill: '#fff' });
            $('.center svg path .cls-3').css({ fill: '#fff' });
        })
    $('.bottom-arr svg path')
        .on('touchstart', function() {
            $(this).css({ fill: '#ff1f52' });
        })
        .on('touchend', function() {
            $(this).css({ fill: '#fff' });
        })
    $('.top-arr svg path')
        .on('touchstart', function() {
            $(this).css({ fill: '#ff1f52' });
        })
        .on('touchend', function() {
            $(this).css({ fill: '#fff' });
        })
})