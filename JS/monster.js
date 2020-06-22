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
      this.loot = this.generateRandomLoot(lootArray)
    }
    else if (killCount >= 6 && killCount <= 10) {
      this.health = Math.round(Math.random() * (140 - 100)) + 100
      this.power = Math.round(Math.random() * (20 - 10)) + 10
      this.defense = Math.round(Math.random() * (10))
      this.tier = 4
      this.loot = this.generateRandomLoot(lootArray)
    }
    else if (killCount >= 11 && killCount <= 15) {
      this.health = Math.round(Math.random() * (160 - 120)) + 120
      this.power = Math.round(Math.random() * (25 - 15)) + 15
      this.defense = Math.round(Math.random() * (15))
      this.tier = 3
      this.loot = this.generateRandomLoot(lootArray)
    }
    else if (killCount >= 16 && killCount <= 20) {
      this.health = Math.round(Math.random() * (180 - 140)) + 140
      this.power = Math.round(Math.random() * (30 - 20)) + 20
      this.defense = Math.round(Math.random() * (20))
      this.tier = 2
      this.loot = this.generateRandomLoot(lootArray)
    }
    else {
      this.health = Math.round(Math.random() * (200 - 160)) + 160
      this.power = Math.round(Math.random() * (35 - 25)) + 25
      this.defense = Math.round(Math.random() * (25))
      this.tier = 1
      this.loot = this.generateRandomLoot(lootArray)
    }
  }

  // Grabs a random loot from the loot.js file
  generateRandomLoot(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let randomItem = arr[randomIndex]
    return randomItem
  }
}