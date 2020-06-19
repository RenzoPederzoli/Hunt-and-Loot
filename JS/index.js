let game = new Game()

console.log(game.hero, game.monster)

//Restart the game
let restartBtn = document.getElementById("restart-btn")
restartBtn.onclick = () => {
  game = new Game()
  console.log("Restarted...Starting new game")
  console.log(game.hero, game.monster)
}

// Event that happens when the atack button is pressed
// If monster dies, then a new one spawns
// If hero dies, game is over
let atkBtn = document.getElementById("atk-btn")
atkBtn.onclick = () => {
  let result = game.hero.attack(game.monster)

  console.log("attacked", result)
  console.log(game.hero, game.monster)

  if (result === "hero-dead") {
    alert(`Game Over, you defeated ${game.hero.kills} monsters`)
  }
  if (result === "monster-dead") {
    game.monster = new Monster()
    game.monster.generateMonster()
  }
}