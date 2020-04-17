//Drops user to contact form
$(".drop_me").click(function () {
    $('html, body').animate({
        scrollTop: $(".second").offset().top
    }, 2000);
});