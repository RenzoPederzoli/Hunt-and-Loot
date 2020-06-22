let game = new Game()

// Targets div that hold roles
let roleBtns = document.getElementById("roles")

// Choosing rogue
let rogueBtn = document.getElementById("rogue")
rogueBtn.onclick = () => {
  game.hero.makeRogue()
  console.log("Chose rogue", game.hero, game.monster)
  roleBtns.innerHTML = "" // Removes buttons after choosing
}

// Choosing warrior
let warriorBtn = document.getElementById("warrior")
warriorBtn.onclick = () => {
  game.hero.makeWarrior()
  console.log("Chose warrior", game.hero, game.monster)
  roleBtns.innerHTML = ""
}

// Choosing tank
let tankBtn = document.getElementById("tank")
tankBtn.onclick = () => {
  game.hero.makeTank()
  console.log("Chose tank", game.hero, game.monster)
  roleBtns.innerHTML = ""
}

//Restart the game
let restartBtn = document.getElementById("restart-btn")
restartBtn.onclick = () => {
  location.reload() // This command reloads the page
}

// Event that happens when the atack button is pressed
// If monster dies, then a new one spawns
// If hero dies, game is over
let atkBtn = document.getElementById("atk-btn")
atkBtn.onclick = () => {
  if (game.hero.role !== null) {
    let result = game.hero.attack(game.monster)
  
    console.log("attacked,", `result: ${result}`)
    console.log(game.hero, game.monster)
  
    if (result === "hero-dead") {
      endGame(game.hero.kills)
    }
    if (result === "monster-dead") {
      game.monster = new Monster()
      game.monster.generateMonster(game.hero.kills)
    }
  }
  else
    alert("Please select a class!")
}

// Adds html to indicate hero death (endgame)
const endGame = (heroKills) => {
  let div = document.querySelector('#end-game h1')
  div.innerText = `Game Over ${heroKills} monsters defeated`
}

