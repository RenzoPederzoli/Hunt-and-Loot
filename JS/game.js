//Target stage h3 tag
let stageCounter = document.getElementById("stages")

class Game {
  constructor() {
    this.hero = new Hero()
    this.monster = new Monster()
    this.monster.generateMonster(0)
  }

  // Draws loot choices and removes atk btn temporarily
  chooseLoot(atkContainer) {
    let item1 = this.monster.loot[0]
    let item2 = this.monster.loot[1]
    let item3 = this.monster.loot[2]

    let itemDiv = document.getElementById("item-choice")
    itemDiv.innerHTML = `Choose Wisely: 

    <button class = item-btn id = "item1"> <strong>${item1.rarity} </strong> <br> ${item1.name}<br> Attack: ${item1.atk} <br> Defense: ${item1.def} <br> Health: ${item1.health} </button>

    <button class = item-btn id = "item2"> <strong>${item2.rarity} </strong> <br> ${item2.name}<br> Attack: ${item2.atk} <br> Defense: ${item2.def} <br> Health: ${item2.health} </button>
    
    <button class = item-btn id = "item3"> <strong>${item3.rarity} </strong> <br> ${item3.name}<br> Attack: ${item3.atk} <br> Defense: ${item3.def} <br> Health: ${item3.health} </button>`
    
    let btnItem1 = document.getElementById("item1")
    btnItem1.onclick = () => {
      clickButton.play()
      this.hero.addLoot(item1)
      this.hero.addItemStats(item1)
      itemDiv.innerHTML = ""
      atkContainer.style.visibility = "visible";
      this.writeStats()
      this.selectMonsterSprite(this.monster.tier)
      stageCounter.innerHTML = `Stage: ${this.hero.kills + 1}`
      console.log(this.hero,this.monster)
    }
    let btnItem2 = document.getElementById("item2")
    btnItem2.onclick = () => {
      clickButton.play()
      this.hero.addLoot(item2)
      this.hero.addItemStats(item2)
      itemDiv.innerHTML = ""
      atkContainer.style.visibility = "visible";
      this.writeStats()
      this.selectMonsterSprite(this.monster.tier)
      stageCounter.innerHTML = `Stage: ${this.hero.kills + 1}`
      console.log(this.hero,this.monster)
    }
    let btnItem3 = document.getElementById("item3")
    btnItem3.onclick = () => {
      clickButton.play()
      this.hero.addLoot(item3)
      this.hero.addItemStats(item3)
      itemDiv.innerHTML = ""
      atkContainer.style.visibility = "visible";
      this.writeStats()
      this.selectMonsterSprite(this.monster.tier)
      stageCounter.innerHTML = `Stage: ${this.hero.kills + 1}`
      console.log(this.hero,this.monster)
    }
  }

  // Adds html to indicate hero death (endgame)
  endGame(heroKills) {
    let div = document.querySelector('#end-game')
    div.innerHTML += `<h2> You cleared ${heroKills} stages </h2><p>Click the restart button on the top left to play again!</p>`
    div.style.visibility = "visible"
  }

  writeStats() {
    let heroStats = document.getElementById("hero-stats")
    let heroStatsContainer = document.getElementById("hero-stats-container")
    heroStatsContainer.style.visibility = "visible"
    if (this.hero.defense === 85)
      heroStats.innerHTML = `<strong>Statistics: </strong> <br> Health: ${this.hero.health} <br> Attack: ${this.hero.power} <br> Defense: ${this.hero.defense}(max)`
    else 
      heroStats.innerHTML = `<strong>Statistics: </strong> <br> Health: ${this.hero.health} <br> Attack: ${this.hero.power} <br> Defense: ${this.hero.defense}`

    let monsterStats = document.getElementById("monster-stats")
    let monsterStatsContainer = document.getElementById("monster-stats-container")
    monsterStatsContainer.style.visibility = "visible"
    monsterStats.innerHTML = `<strong>Statistics: </strong> <br> Health: ${this.monster.health} <br> Attack: ${this.monster.power} <br> Defense: ${this.monster.defense} <br> Tier: ${this.monster.tier}`
  }

  selectMonsterSprite(tier) {
    if (tier === 4) {
      monsterImg.src = "../Images/tier-4-monster.png"
      monsterImg.onload = drawChars
    }
    else if (tier === 3) {
      monsterImg.src = "../Images/tier-3-monster.png"
      monsterImg.onload = drawChars
    }
    else if (tier === 2) {
      monsterImg.src = "../Images/tier-2-monster.png"
      monsterImg.onload = drawChars
    }
    else if (tier === 1) {
      monsterImg.src = "../Images/tier-1-monster.png"
      monsterImg.onload = drawChars
    }
    else {
      monsterImg.src = "../Images/tier-5-monster.png"
      monsterImg.onload = drawChars
    }
  }
}