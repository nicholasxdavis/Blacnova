document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('homepage-video');
    var isInitialPlay = true;

    // When video metadata is loaded
    video.addEventListener('loadedmetadata', function() {
        // Set initial currentTime to 0 to play normally
        video.currentTime = 0;
        video.play(); // Start playing the video
    });

    // On ended event (when video completes)
    video.addEventListener('ended', function() {
        // Reset currentTime to 3 seconds before the end
        video.currentTime = Math.max(video.duration - 3, 0);
        video.play(); // Restart the video playback
    });

    // On each time update (continuously check)
    video.addEventListener('timeupdate', function() {
        // Check if the video has finished playing and it's not the initial play
        if (video.currentTime >= video.duration && !isInitialPlay) {
            // Reset currentTime to 3 seconds before the end
            video.currentTime = Math.max(video.duration - 3, 0);
        }

        // Update isInitialPlay after the first complete play
        if (video.currentTime >= video.duration && isInitialPlay) {
            isInitialPlay = false;
        }
    });
});
