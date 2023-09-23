// Dark Mode Toggle
// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon Toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};

// Initial Theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none"); 
};

// Manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};

// call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
    themeSwitch();
})
moonIcon.addEventListener("click", () => {
    themeSwitch();
})

// invoke theme check on initial load
themeCheck();

//Menu toggle
function menuToggle() {
    var navIconOpen = document.getElementById("navIcon-open");
    var navIconClose = document.getElementById("navIcon-close");
    var navContent = document.getElementById("navMenu");

    if (navContent.style.display === "block") {
      navContent.style.display = "none";
      navIconClose.style.display = "none";
      navIconOpen.style.display = "block";
    } else {
      navContent.style.display = "block";
      navIconClose.style.display = "block";
      navIconOpen.style.display = "none";
    }
  }