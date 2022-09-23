const btnEncender = document.getElementById("btn-home");
const pantalla = document.getElementById("pantalla");
const videoLoading = document.getElementById("loading");
const imagenLogo = document.getElementById("img-logo")


clickBotonEncender = () => {
    let sound = new Audio('../audio/Bing.mp3');
    let soundInstro = new Audio('../audio/audio-intro.mp3');

    setTimeout (()=> {
        btnEncender.addEventListener('click', () => {
            soundInstro.play()
            pantalla.classList.add("img-logo");
        })
        
    }, 1000)

    btnEncender.addEventListener('click', () => {
        sound.play();
    })

    btnEncender.addEventListener('click', () => {
        btnEncender.classList.add("led-encendido")

    })


}

clickBotonEncender()