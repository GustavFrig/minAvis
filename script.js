const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownToggle.addEventListener("click", function () {
    dropdownMenu.classList.toggle("active");
});




//slide videoer
let index = 0;
const slides = document.querySelectorAll("video");
const slider = document.querySelector(".video-container")

function showSlide(n) {
    index = (n + slides.length) % slides.length;
    slider.style.transform = `translateX(${-index * 100}%)`;
}

