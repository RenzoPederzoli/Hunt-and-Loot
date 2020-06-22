class Game {
  constructor() {
    this.hero = new Hero()
    this.monster = new Monster()
    this.monster.generateMonster(0)
  }

  chooseLoot() {
    let item1 = this.monster.loot[0]
    let item2 = this.monster.loot[1]
    let item3 = this.monster.loot[2]

    let itemDiv = document.getElementById("item-choice")
    itemDiv.innerHTML = `<button id = "item1"> ${item1.name} </button>
    <button id = "item2"> ${item2.name} </button>
    <button id = "item3"> ${item3.name} </button>`

    let btnItem1 = document.getElementById("item1")
    btnItem1.onclick = () => {
      this.hero.addLoot(item1)
      this.hero.addItemStats(item1)
      itemDiv.innerHTML = ""
      console.log(this.hero)
    }
    let btnItem2 = document.getElementById("item2")
    btnItem2.onclick = () => {
      this.hero.addLoot(item2)
      this.hero.addItemStats(item2)
      itemDiv.innerHTML = ""
      console.log(this.hero)
    }
    let btnItem3 = document.getElementById("item3")
    btnItem3.onclick = () => {
      this.hero.addLoot(item3)
      this.hero.addItemStats(item3)
      itemDiv.innerHTML = ""
      console.log(this.hero)
    }
  }
}