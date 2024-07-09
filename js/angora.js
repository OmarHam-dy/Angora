"use strict";

/* Navbar */
const nav = document.querySelector("nav");
const home = document.querySelector("main");
const logo = document.querySelector("nav img");
const navLinks = document.querySelectorAll("nav .nav-link");
const navToggler = document.querySelector("nav .navbar-toggler");

// Navbar Toggler
navToggler.addEventListener("click", function () {
  navLinks.forEach(
    (link) =>
      (link.style.color =
        document.documentElement.style.getPropertyValue("--heading-color"))
  );
});

// Sticky Navbar

const obsCallback = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    logo.src = logo.dataset.srcRed;
    nav.style.backgroundColor = "#fff";
    nav.style.boxShadow = "0 1rem 3rem rgba(0, 0, 0, 0.175)";
    navLinks.forEach(
      (link) =>
        (link.style.color = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--heading-color"))
    );
  } else {
    logo.src = logo.dataset.srcWhite;
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
    navLinks.forEach((link) => (link.style.color = "#fff"));
  }
};
const homeObserver = new IntersectionObserver(obsCallback, {
  root: null,
  threshold: 0.8,
});

homeObserver.observe(home);

// Go-up button
const goUpButton = document.querySelector("footer .go-up");

goUpButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// click automatically on the slider
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".carousel-control-next").click();
  setInterval(function () {
    document.querySelector(".carousel-control-next").click();
  }, 3000);
});
