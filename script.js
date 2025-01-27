// Initialisation
let score = 0;
const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");

// Fonction pour générer une position aléatoire
function randomPosition() {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const maxX = gameAreaRect.width - 50;
  const maxY = gameAreaRect.height - 50;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

// Clic sur la cible
target.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Score : ${score}`;
  randomPosition();
});

// Position initiale
randomPosition();
