function monsterConstructor(health, name, attackPower) {
  this.health = health;
  this.name = name;
  this.attackPower = attackPower;
  this.display = function () {
    console.log(this.health);
    console.log(this.name);
    console.log(this.attackPower);
  };
}

function playerConstructor(name, health, level, playerClass, attackPower) {
  this.name = name;
  this.health = health;
  this.level = level;
  this.playerClass = playerClass;
  this.attackPower = attackPower;
  this.display = function () {
    console.log(this.name);
    console.log(this.health);
    console.log(this.level);
    console.log(this.playerClass);
    console.log(this.attackPower);
  };
}


let monster1 = new monsterConstructor(40, "Hades", 22);
let monster2 = new monsterConstructor(65, "lucifersRightHand", 43);
let monster3 = new monsterConstructor(100, "Lucifer", 50);

let player1 = new playerConstructor("Sauce", 100, 68, "Legend", 35);
let player2 = new playerConstructor("Mo2", 110, 68, "Legend", 55);
let player3 = new playerConstructor("Chonky Daddy", 100, 68, "Legend", 36);

matchmakingAndFight();

function matchmakingAndFight() { 
  let monsterRandomizer = [monster1, monster2, monster3];

  let playerRandomizer = [player1, player2, player3];

  let randomNumberMonster = Math.floor(
    Math.random() * monsterRandomizer.length
  );
  let randomNumberPlayer = Math.floor(Math.random() * monsterRandomizer.length);

  let randomMonster = monsterRandomizer[randomNumberMonster]; //gives initial random monster
  let player = playerRandomizer[randomNumberPlayer]; //gives initial random player

  while (true) {

    //matchmakingAndFight
    fight(randomMonster, player);

    //player switch
    if (player.health === 0) {
      delete playerRandomizer[randomNumberPlayer];
      playerRandomizer = playerRandomizer.filter(Boolean);

      if (playerRandomizer.length === 0) {
        break;
      }

      randomNumberPlayer = Math.floor(Math.random() * playerRandomizer.length);
      player = playerRandomizer[randomNumberPlayer];
    } else {
      player.health = 100;
    }

    //monster switch
    if (randomMonster.health === 0) {
      delete monsterRandomizer[randomNumberMonster];
      monsterRandomizer = monsterRandomizer.filter(Boolean);

      if (monsterRandomizer.length === 0) {
        break;
      }

      randomNumberMonster = Math.floor(
        Math.random() * monsterRandomizer.length
      );
      randomMonster = monsterRandomizer[randomNumberMonster];
    } else {
      randomMonster.health = 100;
    }
  }
}

function fight(randomMonster, player) {
  let Attack = Math.floor(Math.random() * 100);
  console.log(player.name + " fights " + randomMonster.name);

  while (true) {
    let comboAttack = Math.floor(Math.random() * 3);

    if (Attack % 2 != 0) {
      console.log(player.name + " attacks " + randomMonster.name);

      for (let i = 0; i <= comboAttack; i++) {
        randomMonster.health = randomMonster.health - player.attackPower;
       
        if (randomMonster.health <= 0) {
          randomMonster.health = 0;
          console.log(randomMonster.name + " health is " + randomMonster.health);
          break;
        } else{
          console.log(randomMonster.name + " health is " + randomMonster.health);
        }
        
      }
    } else {
      console.log(randomMonster.name + " attacks " + player.name);

      for (let i = 0; i <= comboAttack; i++) {
        player.health = player.health - randomMonster.attackPower;
        if (player.health <= 0) {
          player.health = 0;
          console.log(player.name + " health is " + player.health);
          break;
        } else{
          console.log(player.name + " health is " + player.health);
        }
        
      }
    }

    console.log("\n");
    if (randomMonster.health <= 0) {
      break;
    } else if (player.health <= 0) {
      break;
    }
    Attack += 1;
  }
  console.log("FINAL " + player.name + " health " + player.health);
  console.log(
    "FINAL " + randomMonster.name + " health " + randomMonster.health
  );
  if (player.health === 0) {
    console.log(randomMonster.name + " WINS");
    console.log(player.name + " DIES" + "\n");
  } else {
    console.log(player.name + " WINS");
    console.log(randomMonster.name + " DIES" + "\n");
  }
}
