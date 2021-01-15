const video = document.querySelector("#video");
document.querySelector("a-scene").addEventListener('loaded', function() {
    video.play();
});
