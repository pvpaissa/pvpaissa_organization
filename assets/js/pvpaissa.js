$(window).scroll(function() {
    let scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 350) {
        $("#pvpaissaNavigation > .navbar").addClass("mt-zero");
    }

    if (scroll < 350) {
        $("#pvpaissaNavigation > .navbar").removeClass("mt-zero");
    }
});