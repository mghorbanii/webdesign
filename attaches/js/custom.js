window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("navbar-top").style.top = "0";
    } else {
        document.getElementById("navbar-top").style.top = "-340px";
    }
}
