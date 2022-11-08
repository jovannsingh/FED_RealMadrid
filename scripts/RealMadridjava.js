//  Javascript voor Hamburger button op nav  
var toggleButton = document.getElementsByClassName('toggle-button')[0] //[0]=  hij selecteert hier de eerste array en dat is de toggle button
var navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


