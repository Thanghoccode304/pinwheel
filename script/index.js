// services video
const video = document.querySelector(".video");
const videoThumbnail = video.querySelector(".video-thumbnail");
const videoPlayButton = video.querySelector(".video-play-btn");
const videoPlayer = video.querySelector(".video-player");
const videoFrame = videoPlayer.querySelector("iframe");

videoPlayButton.addEventListener("click", () => {
  videoThumbnail.classList.add("is-hidden");
  videoPlayer.hidden = false;
  videoFrame.src = videoFrame.dataset.src;
});

new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
