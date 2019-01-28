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
    /*$('.left-btn').mouseup(function() {
        $(this).css({ backgroundColor: '#1d1d27' });
    });*/
    $('.left-btn').mousedown(function() {
        alert("Handler for .mousedown() called.");
        $(this).css({ backgroundColor: '#2f2f3f' });
    });
    $('.left-btn').mouseup(function() {
        alert("Handler for .mouseup() called.");
        $(this).css({ backgroundColor: '#1d1d27' });
    });
    $('.right-btn')
        .mouseup(function() {
            $(this).css({ backgroundColor: '#1d1d27' });

        })
        .mousedown(function() {
            $(this).css({ backgroundColor: '#2f2f3f' });
        })

    /* $('.left-btn img')
         .mousedown(function() {
             $('.left-btn').css({ backgroundColor: '#2f2f3f' });

         })
         .mouseup(function() {
             $(this).css({ backgroundColor: '#1d1d27' });
         })*/
    /*$('.right-btn img')
        .mousedown(function() {
            alert('down');
            $('.right-btn').css('backgroundColor', '#2f2f3f');

        })
        .mouseup(function() {
            alert('up');
            $('.right-btn').css('backgroundColor', '#1d1d27');

        });*/
})