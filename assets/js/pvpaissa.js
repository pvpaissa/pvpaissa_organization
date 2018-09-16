$(window).scroll(function() {
    let scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 350) {
        $("#pvpaissa-navigation .navbar").addClass("navbar-pvpaissa-bg");
    }

    if (scroll < 350) {
        $("#pvpaissa-navigation .navbar").removeClass("navbar-pvpaissa-bg");
    }
});