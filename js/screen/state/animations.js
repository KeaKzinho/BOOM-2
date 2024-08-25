import { executeAudioEffect } from "./music.js";
export function animation(effect) {
    if (effect == "effect") {
        runAnimation("effect", 1500);
        executeAudioEffect("effect", 2000, 1);
        return;
    }
    if (effect == "defense") {
        runAnimation("defense", 1500);
        return;
    }
    runAnimation(effect, 2000);
    executeAudioEffect(effect, 2000);
}
function runAnimation(animation, duration) {
    const animationDiv = document.getElementById("animation");
    if (!animationDiv)
        return;
    animationDiv.style.background = "none";
    animationDiv.style.background = `url(./assets/gif/${animation}.gif) no-repeat center center / contain`;
    setTimeout(() => {
        animationDiv.style.background = "none";
    }, duration);
}
