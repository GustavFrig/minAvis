const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownToggle.addEventListener("click", function () {
    dropdownMenu.classList.toggle("active");
});




//slide videoer
const videos = document.querySelectorAll(".video video")

let currentVideo = null

videos.forEach((video) => {

    video.addEventListener("mouseenter", () => {
        // Stop playing the previous video:
        if (currentVideo) {
            currentVideo.pause()
            currentVideo.currentTime = 0
        }
        
        video.play();
        currentVideo = video        
    });

});

