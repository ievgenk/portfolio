import "./scss/index.scss";

// DOM Varialbes

const hamburgerMenu = document.getElementById("hamburger-menu");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-item");

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

const hideNav = () => {
  if (STORE.hamurgerMenuOpen) {
    nav.classList.add("hidden");
    hamburgerMenu.classList.remove("close");
    STORE.hamurgerMenuOpen = false;
  } else {
    nav.classList.remove("hidden");
    hamburgerMenu.classList.add("close");
    STORE.hamurgerMenuOpen = true;
  }
};
// Event Listeners

navItems.forEach(item => item.addEventListener("click", hideNav));

hamburgerMenu.addEventListener("click", toggleMenu);

//Smooth Scrolling Jquery Implementation

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });
