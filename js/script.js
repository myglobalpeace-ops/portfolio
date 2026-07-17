const reveals = document.querySelectorAll(".reveal");


function revealOnScroll(){

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();

const menuButton =
document.querySelector(".menu-toggle");


const nav =
document.querySelector(".nav");


menuButton.addEventListener(
"click",
()=>{

    nav.classList.toggle("active");

});

const navLinks =
document.querySelectorAll(".nav a");


navLinks.forEach(link=>{

    link.addEventListener(
    "click",
    ()=>{

        nav.classList.remove("active");

    });

});