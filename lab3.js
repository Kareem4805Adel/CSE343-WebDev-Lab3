document.body.style.backgroundColor = "gray";
document.body.style.textAlign = "center";

let cartquant = 0;

let show = document.getElementById("show");
let add = document.getElementById("add");
let plus2 = document.getElementById("plus2");
let plus3 = document.getElementById("plus3");
let reset = document.getElementById("reset");
let h2 = document.getElementById("header2");

show.addEventListener('click', showCart);
add.addEventListener('click', addCart);
plus2.addEventListener('click', plus2Cart);
plus3.addEventListener('click', plus3Cart);
reset.addEventListener('click', resetCart);


function showCart(){
    h2.textContent = cartquant;
}

function addCart(){
    cartquant = cartquant + 1;
}

function plus2Cart(){
    cartquant = cartquant + 2;
}

function plus3Cart(){
    cartquant = cartquant + 3;
}

function resetCart(){
    cartquant = 0;
    h2.textContent = cartquant;
}