"use strict"
//Containers
const signUpContainer = document.querySelector(".signup-container");
const navMenuContainer = document.querySelector(".nav-menu-container");
const heroContainer = document.querySelector("#hero");

// Header Elements
const header = document.querySelector(".header");
const navMenu = document.querySelector(".nav-menu");
const featureBtn = document.querySelector(".feature-btn");
const companyBtn = document.querySelector(".company-btn");
const feature = document.querySelector(".feature");
const company = document.querySelector(".company");
const featureDropDownMenu = document.querySelector("#feature-dropdown");
const companyDropDownMenu = document.querySelector("#company-dropdown");
const featureMenuArrow = document.querySelector(".dropdown-arrow1");
const companyMenuArrow = document.querySelector(".dropdown-arrow2");
// Hero Section Elements
const heroContent = document.querySelector(".hero-content");
const clients = document.querySelector("clients");

//Mobile Screen Variables
const mobileOverlay = document.querySelector(".mobile__overlay");
const hamburger = document.querySelectorAll(".mobile__btn");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

// Functions
function windowSize() {
    if (window.innerWidth > 1000) {
        hamburger.forEach(m => m.classList.add("hide"));
        navMenuContainer.classList.add("container__flex");
        navMenu.classList.add("container__flex");
        signUpContainer.classList.add("container__flex");
        heroContainer.classList.add("container__flex");
    }
    if (window.innerWidth < 1000) {
        //open close hamburger menu
        hamburger.forEach(m => {
            m.addEventListener("click", hamburgerMenu);
        })
    }
}

function hamburgerMenu(e) {
    let btn = e.target;
    if (btn.classList.contains("open-menu")) {
        navMenuContainer.style.right = 0;
        mobileOverlay.classList.remove("hide");
    }
    if (btn.classList.contains("close-menu")) {
        navMenuContainer.style.right = -1000 + "px";
        mobileOverlay.classList.add("hide");
    }
}

function dropdownMenu(dropdownBtn, dropdownMenu, dropdownArrow) {
    dropdownBtn.setAttribute('aria-expanded', dropdownBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    dropdownArrow.setAttribute("src", featureMenuArrow.getAttribute("src") === "https://julie-gz.github.io/hosted-images/icon-arrow-down.svg" ? "https://julie-gz.github.io/hosted-images/icon-arrow-up.svg" : "https://julie-gz.github.io/hosted-images/icon-arrow-down.svg");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

// Event Listeners
window.addEventListener("load", windowSize);
window.addEventListener("resize", windowSize);

featureBtn.addEventListener("click", function () {
    dropdownMenu(this, featureDropDownMenu, featureMenuArrow);
})

companyBtn.addEventListener("click", function () {
    dropdownMenu(this, companyDropDownMenu, companyMenuArrow);
})