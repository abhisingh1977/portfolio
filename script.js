const button = document.getElementsByClassName("btn");
const button2 = document.getElementsByClassName("btn");

button[0].addEventListener("click",function(){
    window.location.href = "resume.pdf";
});


button[1].addEventListener("click",function(){
    window.location.href = "https://www.instagram.com/abhi___1977?igsh=MW00aHk0M2U0Ynlqcw==";
});

const roles = ["a Passionate Video Editor", "a Learning Web Developer"];
let roleIndex = 0;
let charIndex = 0;
const roleElement = document.getElementById("role");

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        roleElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 1500);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

document.addEventListener("DOMContentLoaded", typeRole);

// Fade-in on scroll
const elements = document.querySelectorAll(".about-text, .about-image");
window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.style.opacity = "1";
        }
    });
});

const contactElements = document.querySelectorAll(".contact-info, .contact-form");
window.addEventListener("scroll", () => {
    contactElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

const serviceCards = document.querySelectorAll(".service-card");
window.addEventListener("scroll", () => {
    serviceCards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});



