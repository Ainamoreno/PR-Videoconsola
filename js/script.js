// Nombrar las constantes
const btnEncender = document.getElementById("btn-home");
const pantalla = document.getElementById("pantalla");
const videoLoading = document.getElementById("loading");
const videoIntro = document.getElementById("video");

// Función para la ejecución del vídeo y sonidos

clickBotonEncender = () => {
    let sound = new Audio('../audio/Bing.mp3');

    setTimeout (()=> {
        btnEncender.addEventListener('click', () => {
            videoIntro.style.display = 'block';
            pantalla.classList.add('video-logo');
            btnEncender.classList.add('led-encendido');
            sound.play();
            video.play();
        });
    }, 1000);

    videoIntro.addEventListener('ended', () => {
        video.style.display = 'none';
        btnEncender.classList.remove('led-encendido');
    });

}

clickBotonEncender()