
// Javascript voor Jersey Carousel
function home(){
    document.getElementById("imageslider") .src="images/RM_Home.png";
}

function away(){
    document.getElementById("imageslider") .src="images/RM_Away.png";
}

function third(){
    document.getElementById("imageslider") .src="images/RM_Third.png";
}

document.getElementById("home").addEventListener("click", home);
document.getElementById("away").addEventListener("click", away);
document.getElementById("third").addEventListener("click", third);


// Javascript voor Hamburger button op nav  
var menustreepjes = document.querySelector("header button");

menustreepjes.addEventListener("click", menuchange);

function menuchange() {
    menustreepjes.classList.toggle("menuOpen");
}
