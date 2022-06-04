const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");


let p1Score = 0;
let p2Score = 0;
let endScore = 5;
let isGameOver = false;

p1Btn.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === endScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === endScore) {
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});