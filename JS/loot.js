//Might think about adding new arrays for stronger mosnter
const commonLoot = [
  { name: "Wood Sword", atk: 5, def: 0, health: 0, rarity: "Common"},
  { name: "Paper Armor", atk: 0, def: 3, health: 0, rarity: "Common"},
  { name: "Weak Heal", atk: 0, def: 0, health: 20, rarity: "Common"},
  { name: "Adventure Hat", atk: 2.5, def: 2, health: 5, rarity: "Common"}
]

const uncommonLoot = [
  { name: "Puny Heal", atk: 0, def: 0, health: 40, rarity: "Uncommon"},
  { name: "Wood Armor", atk: 0, def: 5, health: 0, rarity: "Uncommon"},
  { name: "Light Mace", atk: 10, def: 0, health: 0, rarity: "Uncommon"},
  { name: "Adventure Shirt", atk: 5, def: 3, health: 10, rarity: "Uncommon"}
]

const rareLoot = [
  { name: "Steel sword", atk: 20, def: 0, health: 0, rarity: "Rare"},
  { name: "Heal", atk: 0, def: 0, health: 70, rarity: "Rare"},
  { name: "Chest Plate", atk: 0, def: 12, health: 0, rarity: "Rare"},
  { name: "Adventure Pants", atk: 12, def: 6, health: 20, rarity: "Rare"}
]

const epicLoot = [
  { name: "Staff of the Magi", atk: 60, def: 0, health: 20, rarity: "Epic"},
  { name: "Geralt's Great Sword", atk: 90, def: 0, health: 0, rarity: "Epic"},
  { name: "Divine Heal", atk: 0, def: 3, health: 140, rarity: "Epic"},
  { name: "Paladin's Hammer", atk: 50, def: 0, health: 40, rarity: "Epic"},
  { name: "Impregnable Defense", atk: 0, def: 20, health: 0, rarity: "Epic"},
  { name: "Adventure Shoes", atk: 20, def: 10, health: 35, rarity: "Epic"}
]

const legendaryLoot = [
  { name: "Felipe's Rod", atk: 0, def: 0, health: 0, rarity: "Legendary"},
  { name: "Zeek", atk: 400, def: 0, health: 20, rarity: "Legendary"},
  { name: "Angel's Lightning", atk: 25, def: 0, health: 240, rarity: "Legendary"},
  { name: "Jayson's Bow", atk: 500, def: 0, health: 0, rarity: "Legendary"},
  { name: "Gustavo's Brain", atk: 0, def: 0, health: 400, rarity: "Legendary"},
  { name: "Ahal's Bongos", atk: 350, def: 0, health: 40, rarity: "Legendary"},
  { name: "Juan's Resurrection", atk: 0, def: 0, health: 0, rarity: "Legendary"} ,
  { name: "Unlucky", atk: 0, def: 0, health: -500, rarity: "Legendary"} 
]

const bossLoot = [
  { name: "Diablo's Pendant", atk: 500, def: 0, health: 0, rarity: "Legendary"},
  { name: "Breath of Life", atk: 0, def: 0, health: 500, rarity: "Legendary"},
  { name: "Druid's Touch", atk: 250, def: 0, health: 250, rarity: "Legendary"}
]