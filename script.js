const song = new Audio("NANOWAR OF STEEL - HelloWorld.java (Source Code Video)  Napalm Records - Napalm Records.mp3");
let play=false;

// Fonction pour attendre un certain nombre de millisecondes
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function HelloWorld() {
    let texte = document.querySelector("#output");
    let text = "HelloWorld Programmer Start</br>";
    texte.innerHTML ="";
    await wait(100);
    for (let i = 0; i < 4; i++) {
        texte.innerHTML = text;
        text += "Hello World!</br>";
        await wait(100); // Attend 5 secondes
    }
    text += "<span style=color:red;>Exception in thread &quot;main&quot; java.lang.NullPointerException: Cannot invoke &quot;String.length()&quot; because &quot;joeyDeCaio&quot; is null</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;at HelloWorldMainLauncherClass.falseMethod(HelloWorldMainLauncherClass.java:35)</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;at HelloWorldMainLauncherClass.main(HelloWorldMainLauncherClass.java:27)</span>";
    texte.innerHTML = text;
}

function BGM() {
    if (play==false){
        song.play();
        play=true;
        document.getElementById('play_button').innerHTML = 'Stop';
    } else {
        play=false;
        document.getElementById('play_button').innerHTML = 'Play';
        song.pause();
        song.currentTime = 0;
    }
}
