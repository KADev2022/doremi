let myKeys = document.querySelectorAll(".key");

for (let i = 0; i < myKeys.length; i++) {
    myKeys[i].addEventListener('click', function() {
        playSound(myKeys[i].innerHTML.toLowerCase());
    });
}

// Keydown event to show which key is pressed
document.addEventListener('keydown', function(btn) {
    playSound(btn.key.toLowerCase());
    let pressed_key = btn.key.toLowerCase();

    // Loop to show if the button is deactivated, then it is not glowing
    for (let i = 0; i < myKeys.length; i++) {
        myKeys[i].classList.remove('activated');
    }

    // Loop to show if the key is converted to lowercase and is pressed, then the music will be played and the button will glow
    for (let i = 0; i < myKeys.length; i++) {
        if (pressed_key == myKeys[i].innerHTML.toLowerCase()) {
            myKeys[i].classList.add('activated');
        }
    }
});

/*
Function for playing a sound with an MP3 file

Reference for the code: https://stackoverflow.com/questions/9419263/how-to-play-audio
*/
function playSound(key) {
    switch (key) {
        case 'c':
            var snd = new Audio('doremi/do.mp3');
            snd.play();
            break;
        case 'd':
            var snd = new Audio('doremi/re.mp3');
            snd.play();
            break;
        case 'e':
            var snd = new Audio('doremi/mi.mp3');
            snd.play();
            break;
        case 'f':
            var snd = new Audio('doremi/fa.mp3');
            snd.play();
            break;
        case 'g':
            var snd = new Audio('doremi/sol.mp3');
            snd.play();
            break;
        case 'a':
            var snd = new Audio('doremi/la.mp3');
            snd.play();
            break;
        case 'b':
            var snd = new Audio('doremi/ti.mp3');
            snd.play();
            break;
        case 'k':
            var snd = new Audio('doremi/doh.mp3');
            snd.play();
            break;
        default:
            console.log(key);
    }
}