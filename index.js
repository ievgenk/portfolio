import "./scss/index.scss";

// DOM Varialbes

const hamburgerMenu = document.getElementById("hamburger-menu");
const nav = document.querySelector(".nav");

// DOM Store

const STORE = {
  hamurgerMenuOpen: false
};

// Functions

const toggleMenu = () => {
  if (!STORE.hamurgerMenuOpen) {
    nav.classList.remove("hidden");
    hamburgerMenu.classList.add("close");
    STORE.hamurgerMenuOpen = true;
  } else {
    nav.classList.add("hidden");
    hamburgerMenu.classList.remove("close");
    STORE.hamurgerMenuOpen = false;
  }
};

// Event Listeners

hamburgerMenu.addEventListener("click", toggleMenu);
