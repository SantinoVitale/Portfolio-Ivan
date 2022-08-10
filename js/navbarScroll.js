window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("NavBar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "container-fluid" + " p-0" + " w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace("w3-bar w3-card w3-animate-top w3-white", "");
    }
}