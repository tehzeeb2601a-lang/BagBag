console.log("BagBag Website Started");
function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name=="" || email=="" || message==""){
        alert("Please fill all fields.");
        return false;
    }

    alert("Thank you! Your feedback has been submitted.");
    return true;
}

function contactForm(){

let name=document.getElementById("cname").value;
let email=document.getElementById("cemail").value;
let subject=document.getElementById("csubject").value;
let message=document.getElementById("cmessage").value;

if(name=="" || email=="" || subject=="" || message==""){

alert("Please fill all fields.");

return false;

}

alert("Thank you! Your message has been sent successfully.");

return true;

}
// Scroll Button

let mybutton=document.getElementById("topBtn");

window.onscroll=function(){
scrollFunction();

};

function scrollFunction(){
if(document.body.scrollTop>200||
document.documentElement.scrollTop>200){
mybutton.style.display="block";
}

else{
mybutton.style.display="none";
}

}
function topFunction(){
document.body.scrollTop=0;
document.documentElement.scrollTop=0;
}