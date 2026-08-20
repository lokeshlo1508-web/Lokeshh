/* =====================================================
   TYPING EFFECT
===================================================== */

const typingText = document.getElementById("typingText");

const words = [
    "Accounting",
    "Business",
    "Technology",
    "Python",
    "Computer Applications"
];

let wordIndex = 0;
let letterIndex = 0;

let deleting = false;


function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );

}

typingEffect();


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking a link */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =====================================================
   STYLE SWITCHER
===================================================== */

const themeButton =
    document.getElementById("themeButton");

const stylePanel =
    document.getElementById("stylePanel");


themeButton.addEventListener("click", () => {

    stylePanel.classList.toggle("show");

});


function changeStyle(styleName) {

    document.body.classList.remove(
        "style2",
        "style3"
    );

    if (styleName === "style2") {

        document.body.classList.add("style2");

    }

    if (styleName === "style3") {

        document.body.classList.add("style3");

    }

    localStorage.setItem(
        "portfolioStyle",
        styleName
    );

}


/* Remember selected style */

const savedStyle =
    localStorage.getItem("portfolioStyle");

if (savedStyle) {

    changeStyle(savedStyle);

}


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    const subject =
        encodeURIComponent(
            "Portfolio Contact from " + name
        );


    const body =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );


    window.location.href =
        `mailto:lokeshlol508@gmail.com?subject=${subject}&body=${body}`;

});


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .skill-card, .project-card, .certificate-card, .timeline-item, .stat-card"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});