let game = new Game()

//Initializes stages
stageCounter.innerHTML = `Stage: ${game.hero.kills + 1}`

// Targets div that hold roles
let roleBtns = document.getElementById("roles")

// Choosing rogue
let rogueBtn = document.getElementById("rogue")
rogueBtn.onclick = () => {
  drawChars()
  game.hero.makeRogue()
  game.writeStats()
  stageCounter.style.visibility = "visible"
  console.log("Chose rogue", game.hero, game.monster)
  roleBtns.innerHTML = "<style> #roles {z-index: 0;} </style>" // Removes role selection and makes the conatiner that holds them go to z-index 0
}

// Choosing warrior
let warriorBtn = document.getElementById("warrior")
warriorBtn.onclick = () => {
  drawChars()
  game.hero.makeWarrior()
  game.writeStats()
  stageCounter.style.visibility = "visible"
  console.log("Chose warrior", game.hero, game.monster)
  roleBtns.innerHTML = "<style> #roles {z-index: 0;} </style>"
}

// Choosing tank
let tankBtn = document.getElementById("tank")
tankBtn.onclick = () => {
  drawChars()
  game.hero.makeTank()
  game.writeStats()
  stageCounter.style.visibility = "visible"
  console.log("Chose tank", game.hero, game.monster)
  roleBtns.innerHTML = "<style> #roles {z-index: 0;} </style>"
}

//Restart the game
let restartBtn = document.getElementById("restart-btn")
restartBtn.onclick = () => {
  location.reload() // This command reloads the page
}

//Targets where the atk button is
let atkContainer = document.getElementById('atk-container')

// Event that happens when the atack button is pressed
// If monster dies, then a new one spawns
// If hero dies, game is over
let atkBtn = document.getElementById("atk-btn")
atkBtn.onclick = () => {  
  atkAnimation()
  let result = game.hero.attack(game.monster)
  game.writeStats()
  console.log("attacked,", `result: ${result}`)
  console.log(game.hero, game.monster)

  if (result === "hero-dead") {
    heroDeathAnimation()
    atkContainer.style.visibility = "hidden";
    game.endGame(game.hero.kills)
  }
  if (result === "monster-dead") {
    monsterDeathAnimation()
    atkContainer.style.visibility = "hidden";
    game.chooseLoot(atkContainer)
    game.monster = new Monster()
    game.monster.generateMonster(game.hero.kills)
  }
}

// Everything below has to do with canvas and drawing
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

let heroImg = new Image()
heroImg.src = "../Images/basicsprite.png"

let monsterImg = new Image()
monsterImg.src = "../Images/monster-sprite.png"

//draws chars on role select
function drawChars() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.drawImage(heroImg,0,64*15,64,64,60,50,80,80)
  ctx.drawImage(monsterImg,0,64*13,64,64,150,30,100,100)
}

//draws an individual frame of the sprite sheet
function drawAtk(frame) {
  if (64 * frame >= 64 * 6)
    frame = 0
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.drawImage(heroImg,64*frame,64*15,64,64,60,50,80,80)
  ctx.drawImage(monsterImg,64*frame,64*13,64,64,150,30,100,100)
}

//calls above function once every 50 ms with a counter to defined end of sheet
function atkAnimation() {
  let counter = 0
  setInterval(() => {
    if(counter > 6)
      return
    drawAtk(counter)
    counter++
  }, 50)
}

function drawDeathHero(frame) {
  let monsterFrame = frame
  if (64 * frame >= 64 * 6) {
    frame = 5
    monsterFrame = 0
  }
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.drawImage(heroImg,64*frame,64*20,64,64,60,50,80,80)
  ctx.drawImage(monsterImg,64*monsterFrame,64*13,64,64,150,30,100,100)//Draws monster while hero dying
}

function heroDeathAnimation() {
  let counter = 0
  setInterval(() => {
    if(counter > 6)
      return
    drawDeathHero(counter)
    counter++
  }, 50)
}

function drawDeathMonster(frame) {
  let heroFrame = frame
  if (64 * frame >= 64 * 6) {
    frame = 5
    heroFrame = 0
  }
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.drawImage(monsterImg,64*frame,64*20,64,64,150,30,100,100)
  ctx.drawImage(heroImg,64*heroFrame,64*15,64,64,60,50,80,80) //Draws the hero atk while mosnter dying!
}

function monsterDeathAnimation() {
  let counter = 0
  setInterval(() => {
    if(counter > 6)
      return
    drawDeathMonster(counter)
    counter++
  }, 50)
}