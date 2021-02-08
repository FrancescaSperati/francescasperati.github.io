// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    var y = document.getElementById("myNavbar");
    
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        y.className += " w3-white";
    } else {
        x.className = x.className.replace(" w3-show", "");
        y.className = y.className.replace(" w3-white", "");
    }
}


// function videoFancyBox()  {                     
//     $(".fancybox").attr('rel', 'gallery').fancybox({
//         openEffect  : 'none',
//         autoplay    : 0,
//         closeEffect : 'none',
//         nextEffect  : 'none',
//         prevEffect  : 'none',
//         padding     : 0,
//         margin      : [20, 60, 20, 60] // Increase left/right margin
//     });
// }
