const sounds = ["cinematicsound", "spiderman", "downfall", "power", "miles", "biodynamic"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;
    btn.addEventListener("click", () => {
        stopSongs();
        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0; 
    });
}