
// Global variables
var timer = null;
var interval = 250;//ms
var arrSteps = [];
var idxSteps = 0;
var isRunning = false;
// Prepare before run
window.onload = function () {
    document.getElementById("start").onclick = onStart;
    document.getElementById("stop").onclick = onStop;
    document.getElementById("turbo").onchange = onSpeed;
    document.getElementById("animation").onchange = onChangeAnim;
    document.getElementById("fontsize").onchange = onChangeFont;
}
// onStart
function onStart() {
    // Check Timer
    if (timer === null) {
        let animation = document.getElementById("animation").value;
        arrSteps = ANIMATIONS[animation].split("=====\n");
        idxSteps = 0;
        if (arrSteps.length > 0) {
            isRunning = true;
            timer = setInterval(animate, interval);
            document.getElementById("start").setAttribute("disabled", "disabled");
            document.getElementById("stop").removeAttribute("disabled");
            document.getElementById("animation").setAttribute("disabled", "disabled");
        }
    }
}
// onStop
function onStop() {
    clearInterval(timer);
    timer = null;
    isRunning = false;
    document.getElementById("stop").setAttribute("disabled", "disabled");
    document.getElementById("start").removeAttribute("disabled");
    document.getElementById("animation").removeAttribute("disabled");
}
// doAnimate
function animate() {
    document.getElementById("text-area").value = arrSteps[idxSteps];
    if (idxSteps === arrSteps.length - 1)
        idxSteps = 0;
    else
        idxSteps++;
}
// onChangeAnim
function onChangeAnim() {
    if (isRunning) {
        onStop();
        onStart();
    }
}
// onChangeFont
function onChangeFont() {
    let fontsize = document.getElementById("fontsize").value;
    switch (fontsize) {
        case "Tiny":
            fontsize = 7;
            break;
        case "Small":
            fontsize = 10;
            break;
        case "Medium":
            fontsize = 12;
            break;
        case "Large":
            fontsize = 16;
            break;
        case "Extra Large":
            fontsize = 24;
            break;
        case "XXL":
            fontsize = 32;
            break;
    }
    document.getElementById("text-area").style.fontSize = fontsize + "pt";
    if (isRunning) {
        onStop();
        onStart();
    }
}
// onSpeed
function onSpeed() {
    if (document.getElementById("turbo").checked === true)
        interval = 50;
    else
        interval = 250;
    if (isRunning) {
        onStop();
        onStart();
    }
}