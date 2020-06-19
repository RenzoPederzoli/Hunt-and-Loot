class Monster {
  constructor(health = 100, power = 10, defense = 0) {
    this.health = health
    this.power = power
    this.defense = defense
  }

  generateMonster() {
    this.health = Math.round(Math.random() * (120 - 80)) + 80
    this.power = Math.round(Math.random() * (15 - 5)) + 5
    this.defense = Math.round(Math.random() * (5))
    this.loot = this.generateRandomLoot(lootArray)
  }

  // Grabs a random loot from the loot.js file
  generateRandomLoot(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let randomItem = arr[randomIndex]
    return randomItem
  }
}