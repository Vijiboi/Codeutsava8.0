document.getElementById('showVideoButton').addEventListener('click', function() {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = 'flex';
    const video = document.getElementById('myVideo');
    video.play();
    var audio = new Audio ('scifi-anime-whoosh-24-201456.mp3');
    audio.play();
    video.onended = function() {
        videoContainer.style.display = 'none';
        proceedFunction();
        
    };
});

function proceedFunction() {
    window.location.href = "intr.html"; 
}