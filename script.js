const sideBars = document.querySelector(".side-bars"),
    navCross = document.querySelector("header #menu .menu-container-2 svg"),
    navMenu = document.querySelector("header #menu"),
    menuLinks = document.querySelectorAll("header #menu .menu-container-2 p"),
    desktopDialog1 = document.getElementById("dialog-1-desktop"),
    desktopDialog2 = document.getElementById("dialog-2-desktop"),
    embeddedDialog1 = document.querySelector(".dialog-container-1"),
    embeddedDialog2 = document.querySelector(".dialog-container-2"),
    mobileDialog1 = document.querySelector(".dialog-container-1"),
    mobileDialog2 = document.querySelector(".dialog-container-1"),
    embeddedDialog1Mobile = document.querySelector(".dialog-1-mobile"),
    embeddedDialog2Mobile = document.querySelector(".dialog-2-mobile");

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

/* 
    Desktop Dialogs shown on hover +++ svg positioning
*/

// P.S. Tried the showModal() method, but it fluctuates so all that dialog setup was a waste, could've just used a div....

// Show the dialog
const showDialog = (dialog) => {
    dialog.style.display = "block";
}

// Hide the dialog
const hideDialog = (dialog) => {
    dialog.style.display = "none";
}
embeddedDialog1.addEventListener("mouseenter", () => showDialog(desktopDialog1));

embeddedDialog1.addEventListener("mouseleave", () => hideDialog(desktopDialog1));

embeddedDialog2.addEventListener("mouseenter", () => showDialog(desktopDialog2));

embeddedDialog2.addEventListener("mouseleave", () => hideDialog(desktopDialog2));


/* 

    Mobile Dialogs shown on Click

*/

embeddedDialog1Mobile.addEventListener("click", (event) => {
    alert("click")
})