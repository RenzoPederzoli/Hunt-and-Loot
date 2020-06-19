class Hero {
  constructor(health = 200, power = 15, defense = 5, kills = 0) {
    this.health = health
    this.power = power
    this.defense = defense
    this.kills = kills
    this.items = []
  }

  // Hero always takes damage first, for now
  attack(monster) {
    // Damage to take is rounded for nice health numbers
    let heroDmgToTake = Math.round(monster.power * (100 - this.defense) / 100)
    let monsterDmgToTake = Math.round(this.power * (100 - monster.defense) / 100)

    if (this.health - heroDmgToTake <= 0) {
      console.log("Hero has died")
      this.health = 0
      return "hero-dead"
    }
    this.health -= heroDmgToTake

    if (monster.health - monsterDmgToTake <= 0) {
      console.log("Monster has died")
      this.kills++
      this.addLoot(monster.loot)
      this.addItemStats(monster.loot)
      monster.health = 0
      return "monster-dead"
    }
    monster.health -= monsterDmgToTake
  }

  // Makes sure item added is an item and not a heal
  addLoot(item) {
    if (!(item.name.includes("Heal") || item.name.includes("heal"))) {
      this.items.push(item)
    }
  }

  // Updates the Hero's stats depending on item received
  addItemStats(item) {
    this.health += item.health
    this.power += item.atk
    if (this.defense + item.def <= 95) {
      this.defense += item.def
    }
  }
}