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

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

function updateActiveLink() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let currentSection = sections[0].id;

    sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
            currentSection = section.id;
        }
    });

    // Если пользователь дошел до самого низа страницы —
    // принудительно активируем последний пункт меню
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
    ) {
        currentSection = sections[sections.length - 1].id;
    }

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

/*navLinks.forEach(link=>{

    link.addEventListener(
    "click",
    ()=>{

        nav.classList.remove("active");

    });

});*/



// ===== Theme =====


const themeButton = document.querySelector(".theme-toggle");

const themeIcon = document.querySelector(".theme-icon");

const savedTheme =
localStorage.getItem("theme");


if(savedTheme === "dark"){

    document.body.classList.add("dark");

    if(themeIcon){

        themeIcon.textContent="☀️";

    }

}

if(themeButton){

    themeButton.addEventListener("click", ()=>{


        document.body.classList.toggle("dark");


    const isDark =
    document.body.classList.contains("dark");


    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );



    if(isDark){

        themeIcon.textContent = "☀️";

    }
    else{

        themeIcon.textContent = "🌙";

    }


    });

}



// ===== Language =====


const languageButton =
document.querySelector(".language-toggle");


const langCurrent =
document.querySelector(".lang-current");


const langNext =
document.querySelector(".lang-next");



let currentLanguage =
localStorage.getItem("language") || "ru";



if(languageButton){


languageButton.addEventListener("click", ()=>{


    currentLanguage =
    currentLanguage === "ru"
    ? "en"
    : "ru";

localStorage.setItem(
"language",
currentLanguage
);

    document
    .querySelectorAll("[data-ru]")
    .forEach(element=>{


        element.textContent =
        element.dataset[currentLanguage];


    });



    if(currentLanguage === "ru"){

        langCurrent.textContent="RU";
        langNext.textContent="EN";

    }
    else{

        langCurrent.textContent="EN";
        langNext.textContent="RU";

    }


});


}

function setLanguage(){


document
.querySelectorAll("[data-ru]")
.forEach(element=>{


    element.textContent =
    element.dataset[currentLanguage];


});


if(currentLanguage==="ru"){

    langCurrent.textContent="RU";
    langNext.textContent="EN";

}
else{

    langCurrent.textContent="EN";
    langNext.textContent="RU";

}


}


setLanguage();

