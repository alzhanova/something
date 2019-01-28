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
    $('.left-arr')
        .on('touchstart', function() {
            $('.left-arr svg path').css({ fill: '#ff1f52' });
        })
        .on('touchend', function() {
            $('.left-arr svg path').css({ fill: '#fff' });
        })
    $('.right-arr')
        .on('touchstart', function() {
            $('.right-arr svg path').css({ fill: '#ff1f52' });
        })
        .on('touchend', function() {
            $('.right-arr svg path').css({ fill: '#fff' });
        })
    $('.center')
        .on('touchstart', function() {
            $('.center svg path').css({ fill: '#ff1f52' });
        })
        .on('touchend', function() {
            $('.center svg path').css({ fill: '#fff' });
        })
    $('.bottom-arr')
        .on('touchstart', function() {
            $('.bottom-arr svg path').css({ fill: '#ff1f52' });
        })
        .on('touchend', function() {
            $('.bottom-arr svg path').css({ fill: '#fff' });
        })
    $('.top-arr')
        .on('touchstart', function() {
            $('.top-arr svg path').css({ fill: '#ff1f52' });
        })
        .on('touchend', function() {
            '.top-arr svg path'
            $('.top-arr svg path').css({ fill: '#fff' });
        })
})