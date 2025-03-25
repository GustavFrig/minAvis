const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownToggle.addEventListener("click", function () {
    dropdownMenu.classList.toggle("active");
});




//slide videoer
const videos = document.querySelectorAll(".video video");

videos.forEach((video) => {

    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });
});

