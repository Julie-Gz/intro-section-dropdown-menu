"use strict"
// Variables
const featureBtn = document.querySelector(".feature-btn");
const companyBtn = document.querySelector(".company-btn");
const featureMenu = document.querySelector(".feature");
const companyMenu = document.querySelector(".company");
const featureDropDownArrow = document.querySelector(".dropdown-arrow1");
const companyDropDownArrow = document.querySelector(".dropdown-arrow2");

//Hero Image
const heroImage = document.querySelector(".hero-image");

// Event
//Toggle Menu
featureBtn.addEventListener("click", function () {
    featureMenu.classList.toggle("hide");
    if (featureMenu.classList.contains("hide")) {
        featureDropDownArrow.src = "https://julie-gz.github.io/hosted-images/icon-arrow-down.svg";
        featureBtn.ariaExpanded = "false";
    } else {
        featureDropDownArrow.src = "https://julie-gz.github.io/hosted-images/icon-arrow-up.svg";
        featureBtn.ariaExpanded = "true";
    }
});
companyBtn.addEventListener("click", function () {
    companyMenu.classList.toggle("hide");
    if (companyMenu.classList.contains("hide")) {
        companyDropDownArrow.src = "https://julie-gz.github.io/hosted-images/icon-arrow-down.svg";
        companyBtn.ariaExpanded = "false";
    } else {
        companyDropDownArrow.src = "https://julie-gz.github.io/hosted-images/icon-arrow-up.svg";
        companyBtn.ariaExpanded = "true";
    }
});

// Screen size
function checkScreenSize() {
    let screenSize = window.innerWidth;

    if (screenSize <= "1000") {
        heroImage.src = "https://julie-gz.github.io/hosted-images/image-hero-mobile.png";
    }
}

window.addEventListener("load", checkScreenSize);
