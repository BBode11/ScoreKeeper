const player1 = {
    score: 0,
    button: document.querySelector("#p1Btn"),
    display: document.querySelector("#p1Display")
}

const player2 = {
    score: 0,
    button: document.querySelector("#p2Btn"),
    display: document.querySelector("#p2Display")
}


const resetBtn = document.querySelector("#reset");
const playToSelect = document.querySelector("#playTo");

let endScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === endScore) {
            isGameOver = true;
            player.display.classList.add("winner");
            opponent.display.classList.add("loser");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


player1.button.addEventListener("click", function () {
    updateScore(player1, player2);
});

player2.button.addEventListener("click", function () {
    updateScore(player2, player1);
});

playToSelect.addEventListener("change", function () {
    endScore = parseInt(this.value);
    reset();

});

resetBtn.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("winner", "loser");
        p.button.disabled = false;
    }
}