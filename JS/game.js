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
      this.hero.addLoot(item1)
      this.hero.addItemStats(item1)
      itemDiv.innerHTML = ""
      atkContainer.style.visibility = "visible";
      console.log(this.hero,this.monster)
      return true
    }
    let btnItem2 = document.getElementById("item2")
    btnItem2.onclick = () => {
      this.hero.addLoot(item2)
      this.hero.addItemStats(item2)
      itemDiv.innerHTML = ""
      atkContainer.style.visibility = "visible";
      console.log(this.hero,this.monster)
      return true
    }
    let btnItem3 = document.getElementById("item3")
    btnItem3.onclick = () => {
      this.hero.addLoot(item3)
      this.hero.addItemStats(item3)
      itemDiv.innerHTML = ""
      atkContainer.style.visibility = "visible";
      console.log(this.hero,this.monster)
      return true
    }
    return false
  }

  // Adds html to indicate hero death (endgame)
  endGame(heroKills) {
    let div = document.querySelector('#end-game')
    div.innerHTML += `<h2> You defeated ${heroKills} monsters </h2><p>Click the restart button on the top left to play again!</p>`
    div.style.visibility = "visible"
  }
}