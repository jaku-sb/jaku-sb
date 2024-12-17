let coins = 0;
let energy = 19;

const coinsDisplay = document.getElementById("coins");
const energyDisplay = document.getElementById("energy");
const clikjk = document.getElementById("clikjk");
const messageDisplay = document.getElementById("message");

clikjk.addEventListener("click", () => {
    if (energy > 0) {
        coins++;
        energy--;
        coinsDisplay.textContent = coins;
        energyDisplay.textContent = energy;
    } else {
        messageDisplay.textContent = "СТОООЙ!!!!! я устал";
    }
});