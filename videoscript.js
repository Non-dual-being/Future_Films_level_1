window.onload = function() {
    speelVideos();
};

function speelVideos(shuffle = false, isIntro = true) {
    let videoLijst = JSON.parse(localStorage.getItem('videoLijst')) || [];

    const introVideo = 'intro.mp4';
    const outroVideo = 'outro.mp4';

    // Controleer of we de intro en outro moeten toevoegen
    if (isIntro) {
        // Verwijder eventuele bestaande intro en outro om duplicaten te voorkomen
        videoLijst = videoLijst.filter(video => video !== introVideo && video !== outroVideo);
        videoLijst.unshift(introVideo);
        videoLijst.push(outroVideo);
        console.log('De eerste videolijst', videoLijst);
    } else {
        // Verwijder intro als die al is afgespeeld
        videoLijst = videoLijst.filter(video => video !== introVideo);
        
    }

    if (shuffle) {
        // Shuffle de video's tussen intro en outro
        const middleVideos = videoLijst.slice(1, -1).sort(() => Math.random() - 0.5);
        videoLijst = [introVideo, ...middleVideos, outroVideo];
        localStorage.setItem('videoLijst', JSON.stringify(videoLijst));
        console.log("Aankomende video's zijn:", videoLijst);
    }

    if (videoLijst.length > 0) {
        const videoPlayer = document.getElementById('videoPlayer');
        const source = document.createElement('source');
        source.setAttribute('src', `./videos/${videoLijst[0]}`);
        source.setAttribute('type', 'video/mp4');
        videoPlayer.innerHTML = ''; // Verwijder vorige bronnen
        videoPlayer.appendChild(source);
        videoPlayer.load();
        videoPlayer.play();

        videoPlayer.onended = function() {
            videoLijst.shift(); // Verwijder de zojuist afgespeelde video
            localStorage.setItem('videoLijst', JSON.stringify(videoLijst)); // Update de lijst in localStorage
            if (videoLijst.length > 0) {
                speelVideos(false, false); // Speel de volgende video
            } else {
                console.log("Geen video's meer om te spelen.");
            }
        };
    } else {
        console.log("Geen video's beschikbaar om te spelen.");
    }

    document.getElementById('playButton').addEventListener('click', function() {
        document.getElementById('videoPlayer').play();
    });

    document.getElementById('pauseButton').addEventListener('click', function() {
        document.getElementById('videoPlayer').pause();
    });

    document.getElementById('fullscreenButton').addEventListener('click', function() {
        document.getElementById('videoPlayer').requestFullscreen();
    });
}

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {event.preventDefault();}}, { passive: false });