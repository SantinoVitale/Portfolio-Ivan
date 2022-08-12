window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("NavBar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "container-fluid" + " p-0" + " color-barra" + " header-barra" + " animacion-barra";
    } else {
        navbar.className = navbar.className.replace("color-barra header-barra animacion-barra", "");
    }
}