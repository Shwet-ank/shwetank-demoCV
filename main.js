
// ---------------------VARIABLES-----------------------

let form = document.querySelector(".forms");
let btn = document.querySelector(".bttn");
let sent = document.querySelector(".sentt");
let fafa = document.querySelector(".fafa"); 
let nav = document.querySelector(".nav");
let res = document.querySelector(".res"); 

// ---------------------EVENT LISTENERS-----------------------

btn.addEventListener("click", function doSomething(event) {
    event.preventDefault();
    sent.innerHTML = "Message Sent ✔";
    setTimeout(function(){
        sent.innerHTML = "";
    },4000)
    form.reset();
});

fafa.addEventListener("click", function open() {
    nav.style.right = "0";
    nav.style.transition =  "all 0.3s ease-in-out";
});

res.addEventListener("click", function close() {
    nav.style.right = "-1000px";
    nav.style.transition =  "all 0.3s ease-in-out";
});