document.addEventListener("DOMContentLoaded", function() {
    $('#jumbo-h1').addClass('hidden');
    $('#jumbo-h2').addClass('hidden');
});

window.onload = () => {
    $('#jumbo-h1').removeClass('hidden');
    $('#jumbo-h2').removeClass('hidden');
}