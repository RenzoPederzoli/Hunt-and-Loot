class Hero {
  constructor(health = 200, power = 15, defense = 5, kills = 0,role=null) {
    this.health = health
    this.power = power
    this.defense = defense
    this.kills = kills
    this.items = []
    this.role = role
  }

  //checks if juans resurrection is in array
  checkForRes() {
    for (let item of this.items) {
      if (item.name === "Juan's Resurrection") {
        this.items.splice(this.items.indexOf(item),1)
        return true
      }
    }
    return false
  }

  //checks if Felipe's rod is in array
  checkForFelipes() {
    for (let item of this.items) {
      if (item.name === "Felipe's Rod") {
        return true
      }
    }
    return false
  }

  // Hero always takes damage first, for now
  attack(monster) {
    // Damage to take is rounded for nice health numbers
    let heroDmgToTake = Math.round(monster.power * (100 - this.defense) / 100)
    let monsterDmgToTake = Math.round(this.power * (100 - monster.defense) / 100)

    document.getElementById("resurrect-notify").style.visibility = "hidden"
    if (this.health - heroDmgToTake <= 0 && this.checkForRes()) {
      new Audio("../Sounds/revive-sound.wav").play()
      document.getElementById("resurrect-notify").style.visibility = "visible"
      this.health = 400
      return
    }

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
    if (this.defense + item.def <= 85) {
      this.defense += item.def
    }
    else {
      this.defense = 85;
    }
  }

  makeRogue() {
    this.health = 250
    this.power = 45
    this.defense = 0
    this.role = "rogue"
  }

  makeWarrior() {
    this.health = 325
    this.power = 35
    this.defense = 2.5
    this.role = "warrior"
  }

  makeTank() {
    this.health = 400
    this.power = 25
    this.defense = 10
    this.role = "tank"
  }
}