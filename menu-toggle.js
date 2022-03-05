$(document).on('click', '.menu', function(){
    // $('.nav-links-container').slideDown();
    $('.nav-links-container').animate({
        width: "toggle"
    });
    $('.menu').hide();
    $('.close-navs').show();
});

$(document).on('click', '.close-navs', function(){
    // $('.nav-links-container').slideUp();
    $('.nav-links-container').animate({
        width: "toggle"
    });
    $('.menu').show();
    $('.close-navs').hide();
});