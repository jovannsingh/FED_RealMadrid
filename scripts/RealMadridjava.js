
function home(){
    document.getElementById("imageslider") .src="/images/RM_Home.png";
}

function away(){
    document.getElementById("imageslider") .src="/images/RM_Away.png";
}

function third(){
    document.getElementById("imageslider") .src="/images/RM_Third.png";
}

document.getElementById("home").addEventListener("click", home);
document.getElementById("away").addEventListener("click", away);
document.getElementById("third").addEventListener("click", third);


function changeicon(){
    let displayimage = document.getElementById('ToggleImage')
        if(displayimage.src.match('/images/brightness-low-fill.svg')){
            displayimage.src = '/images/moon-stars-fill.svg'
        } else {
            displayimage.src = '/images/brightness-low-fill.svg'
        }
}   


var menustreepjes = document.querySelector("header button");

menustreepjes.addEventListener("click", menuchange);

function menuchange() {
    menustreepjes.classList.toggle("menuOpen");
}


// var eersteStreepjesButton = document.querySelector("header button");
// eersteStreepjesButton.addEventListener("click", eersteStreepjesButtonKlik);
// function eersteStreepjesButtonKlik() {
//   eersteStreepjesButton.classList.toggle("menuOpen");
// }