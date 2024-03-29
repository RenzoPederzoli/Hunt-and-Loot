let scale = 1.045
class Monster {
  constructor(health = 100, power = 10, defense = 0) {
    this.health = health
    this.power = power
    this.defense = defense
    this.tier = 5
  }

  // Creates and determines tier of monster based on player kills
  generateMonster(killCount) {
    if (killCount <= 5) {
      this.health = Math.round(Math.random() * (120 - 80)) + 80
      this.power = Math.round(Math.random() * (15 - 5)) + 5 
      this.defense = Math.round(Math.random() * (5))
      this.loot = this.generateRandomLoot()
    }
    else if (killCount >= 6 && killCount <= 10) {
      this.health = Math.round(Math.random() * (140 - 100)) + 100
      this.power = Math.round(Math.random() * (20 - 10)) + 10
      this.defense = Math.round(Math.random() * (10))
      this.tier = 4
      this.loot = this.generateRandomLoot()
    }
    else if (killCount >= 11 && killCount <= 15) {
      this.health = Math.round(Math.random() * (160 - 120)) + 120
      this.power = Math.round(Math.random() * (25 - 15)) + 15
      this.defense = Math.round(Math.random() * (15))
      this.tier = 3
      this.loot = this.generateRandomLoot()
    }
    else if (killCount >= 16 && killCount <= 20) {
      this.health = Math.round(Math.random() * (180 - 140)) + 140
      this.power = Math.round(Math.random() * (30 - 20)) + 20
      this.defense = Math.round(Math.random() * (20))
      this.tier = 2
      this.loot = this.generateRandomLoot()
    }
    else if (killCount >= 21 && killCount <= 26){
      this.health = Math.round(Math.random() * (200 - 160)) + 160
      this.power = Math.round(Math.random() * (35 - 25)) + 25
      this.defense = Math.round(Math.random() * (25))
      this.tier = 1
      this.loot = this.generateRandomLoot()
    }
    else if (killCount === 49) { //Mini-Boss at stage 50
      this.health = 3000
      this.power = 300
      this.defense = 85
      this.tier = "Mini-Boss"
      this.loot = this.generateRandomLoot()
    }
    else { // This will be where I make game infinetly scale
      this.health = Math.round(Math.random() * (200 - 160) ** scale) + 160
      this.power = Math.round(Math.random() * (35 - 25) ** scale) + 25
      this.defense = Math.round(Math.random() * (25) ** scale)
      if (this.defense > 85)
        this.defense = 85
      this.tier = 1
      this.loot = this.generateRandomLoot()
      scale += 0.0470;
    }
  }
  
  // determines what array the loot will come from
  determineLootPool() {
    if (this.tier === 5) {
      let rand = Math.random()
      if (rand < 0.7)
        return commonLoot
      else if (rand >= 0.7 && rand < 0.98)
        return uncommonLoot
      else 
        return rareLoot
    }
    if (this.tier === 4) {
      let rand = Math.random()
      if (rand < 0.6)
        return commonLoot
      else if (rand >= 0.6 && rand < 0.93)
        return uncommonLoot
      else if (rand >= 0.93 && rand < 0.99)
        return rareLoot
      else
        return epicLoot
    }
    if (this.tier === 3) {
      let rand = Math.random()
      if (rand < 0.5)
        return commonLoot
      else if (rand >= 0.5 && rand < 0.75)
        return uncommonLoot
      else if (rand >= 0.75 && rand < 0.97)
        return rareLoot
      else
        return epicLoot
    }
    if (this.tier === 2) {
      let rand = Math.random()
      if (rand < 0.25)
        return commonLoot
      else if (rand >= 0.25 && rand < 0.5)
        return uncommonLoot
      else if (rand >= 0.5 && rand < 0.85)
        return rareLoot
      else if (rand >= 0.85 && rand < 0.999)
        return epicLoot
      else
        return legendaryLoot
    }
    if (this.tier === 1) {
      let rand = Math.random()
      if (rand < 0.05)
        return commonLoot
      else if (rand >= 0.05 && rand < 0.15)
        return uncommonLoot
      else if (rand >= 0.15 && rand < 0.70)
        return rareLoot
      else if (rand >= 0.70 && rand < 0.99)
        return epicLoot
      else {
        return legendaryLoot
      }
    }
    if (this.tier === "Mini-Boss") {
      let rand = Math.random() // why is this here?
      return bossLoot
    }
  }

  // Grabs a random loot from the loot.js file
  generateRandomLoot() {
    let itemArray = []

    let arr = this.determineLootPool()
    let randomIndex = Math.floor(Math.random() * arr.length)
    let randomItem1 = arr[randomIndex]

    itemArray.push(randomItem1)

    arr = this.determineLootPool()
    randomIndex = Math.floor(Math.random() * arr.length)
    let randomItem2 = arr[randomIndex]
    itemArray.push(randomItem2)

    arr =this.determineLootPool()
    randomIndex = Math.floor(Math.random() * arr.length)
    let randomItem3 = arr[randomIndex]
    itemArray.push(randomItem3)

    return itemArray
  }
}