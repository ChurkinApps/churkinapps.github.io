/* Scroll for "Our apps" button */
$("#big-button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#posts").offset().top - 20
    }, 400);
});