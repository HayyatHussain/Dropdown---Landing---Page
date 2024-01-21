const sideBars = document.querySelector(".side-bars"),
    navCross = document.querySelector("header #menu .menu-container-2 svg"),
    navMenu = document.querySelector("header #menu"),
    menuLinks = document.querySelectorAll("header #menu .menu-container-2 p");

let timeoutArray = [];

menuLinks.forEach(link => {
    link.style.transform = "translate(500px, 0px)";
});

sideBars.addEventListener("click", () => {
    navMenu.style.width = "100%";

    // Clear existing timeouts
    timeoutArray.forEach(timeoutId => {
        clearTimeout(timeoutId);
    });
    timeoutArray = [];

    menuLinks.forEach((link, i) => {
        link.style.transition = "all 500ms";
        const delay = 260;
        const transformDelay = i * delay;

        const timeoutId = setTimeout(() => {
            link.style.transform = "translate(0px, 0px)";
        }, transformDelay);

        timeoutArray.push(timeoutId);
    });
});

navCross.addEventListener("click", () => {
    navMenu.style.width = "0%";

    menuLinks.forEach(link => {
        link.style.transform = "translate(500px, 0px)";
        link.style.transition = "all 500ms"; // Adjust transition duration as needed
    });

    // Clear timeouts for smoother transition
    timeoutArray.forEach(timeoutId => {
        clearTimeout(timeoutId);
    });
    timeoutArray = [];
});