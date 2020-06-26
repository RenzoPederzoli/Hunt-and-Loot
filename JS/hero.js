class Hero {
  constructor(health = 200, power = 15, defense = 5, kills = 0,role=null) {
    this.health = health
    this.power = power
    this.defense = defense
    this.kills = kills
    this.items = []
    this.role = role
  }

  // Hero always takes damage first, for now
  attack(monster) {
    // Damage to take is rounded for nice health numbers
    let heroDmgToTake = Math.round(monster.power * (100 - this.defense) / 100)
    let monsterDmgToTake = Math.round(this.power * (100 - monster.defense) / 100)

    if (this.health - heroDmgToTake <= 0) {
      this.health = 0
      return "hero-dead"
    }
    this.health -= heroDmgToTake

    if (monster.health - monsterDmgToTake <= 0) {
      this.kills++
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
    else {
      this.defense = 95;
    }
  }

  makeRogue() {
    this.health = 225 
    this.power = 40
    this.defense = 0
    this.role = "rogue"
  }

  makeWarrior() {
    this.health = 325
    this.power = 25
    this.defense = 5
    this.role = "warrior"
  }

  makeTank() {
    this.health = 400
    this.power = 15
    this.defense = 10
    this.role = "tank"
  }
}