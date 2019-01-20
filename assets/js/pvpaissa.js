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

/* ??? Needed ??? */
$(".navbar-toggler").on("click", function(){
    $("#pvpaissaSearch").toggleClass("d-block");
    $("#pvpaissaAccount").toggleClass("d-block");
});