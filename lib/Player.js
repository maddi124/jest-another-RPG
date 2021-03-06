const Potion = require('./Potion');
const Character = require('./Character');

class Player extends Character {
  constructor(name = '') {
    super(name);

    this.inventory = [new Potion('health'), new Potion()];
  }

  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  }

  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  addPotion(potion) {
    this.inventory.push(potion);
  }

  usePotion(index) {
    const potion = this.inventory.splice(index, 1)[0];

    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  }
}
  // inherit prototype methods from Character here:
// Player.prototype = Object.create(Character.prototype);

//   Player.prototype.getStats = function() {
//     return {
//       potions: this.inventory.length,
//       health: this.health,
//       strength: this.strength,
//       agility: this.agility
//     };
//   };

//   Player.prototype.getInventory = function() {

//     if (this.inventory.length) {
//       return this.inventory;
//     }
//     return false;
//   };

  // const player = new Player('Jane');

  //   player.getStats();
  //   player.getInventory();

  
  // Player.prototype.getHealth = function() {
  //   return `${this.name}'s health is now ${this.health}!`;
  // }

  // Player.prototype.isAlive = function() {
  //   if (this.health === 0) {
  //     return false;
  //   }
  //   return true;
  // };

  // Player.prototype.reduceHealth = function(health) {
  //   this.health -= health;
  
  //   if (this.health < 0) {
  //     this.health = 0;
  //   }
  // };

  // Player.prototype.getAttackValue = function() {
  //   const min = this.strength - 5;
  //   const max = this.strength + 5;
  
  //   return Math.floor(Math.random() * (max - min) + min);
  // };

  // Player.prototype.addPotion = function(potion) {
  //   this.inventory.push(potion);
  // };
  
  // Player.prototype.usePotion = function(index) {
  //   const potion = this.getInventory().splice(index, 1)[0];
  
  //   switch (potion.name) {
  //     case 'agility':
  //       this.agility += potion.value;
  //       break;
  //     case 'health':
  //       this.health += potion.value;
  //       break;
  //     case 'strength':
  //       this.strength += potion.value;
  //       break;
  //   }
  // };
  

  module.exports = Player;