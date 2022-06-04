const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const resetBtn = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const playToSelect = document.querySelector("#playTo");



let p1Score = 0;
let p2Score = 0;
let endScore = 3;
let isGameOver = false;

p1Btn.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === endScore) {
            isGameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
        p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === endScore) {
            isGameOver = true;
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
        }
        p2Display.textContent = p2Score;
    }
});

playToSelect.addEventListener("change", function () {
    endScore = parseInt(this.value);
    reset();

});

resetBtn.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner", "loser");
    p2Display.classList.remove("loser", "winner");
}