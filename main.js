let player = [];
let enemy = [];
var turn = 0;
var turncount = 0;
var youwin = 0;

function clickb(number) {
  turncount += 1;
  if (player.includes(number) || enemy.includes(number)) {
    number = 0;
  }
  if (turn == 0 && number != 0) {
    player.push(number);
    turn = 1;
  } else if (turn == 1 && number != 0) {
    enemy.push(number);
    turn = 0;
  }
  update();
}
function update() {
  for (let index = 1; index <= 9; index++) {
    if (player.includes(index)) {
      document.getElementById("s" + index).innerHTML = "x";
    }
  }
  for (let index = 1; index <= 9; index++) {
    if (enemy.includes(index)) {
      document.getElementById("s" + index).innerHTML = "o";
    }
  }
  for (let index = 1; index <= player.length; index++) {
    if (index % 3 == 0) {
      if (
        player.includes(index) &&
        player.includes(index - 1) &&
        player.includes(index - 2)
      ) {
        turn = 2;
        console.log("waaa");
      }
    }
    if (1 <= index <= 3) {
      if (
        player.includes(index) &&
        player.includes(index + 3) &&
        player.includes(index + 6)
      ) {
        turn = 2;
        console.log("waaa");
      }
    }
    if (index == 1 || index == 3) {
      if (
        (player.includes(index) &&
          player.includes(index + 4) &&
          player.includes(index + 8)) ||
        (player.includes(index) &&
          player.includes(index + 2) &&
          player.includes(index + 4))
      ) {
        turn = 2;
        console.log("waaa");
      }
    }
  }
  if (turn == 2) {
    youwin = 1;
  }
  for (let index = 1; index <= enemy.length; index++) {
    if (index % 3 == 0) {
      if (
        enemy.includes(index) &&
        enemy.includes(index - 1) &&
        enemy.includes(index - 2)
      ) {
        turn = 3;
        console.log("waaa");
      }
    }
    if (1 <= index <= 3) {
      if (
        enemy.includes(index) &&
        enemy.includes(index + 3) &&
        enemy.includes(index + 6)
      ) {
        turn = 3;
        console.log("waaa");
      }
    }
    if (index == 1 || index == 3) {
      if (
        (enemy.includes(index) &&
          enemy.includes(index + 4) &&
          enemy.includes(index + 8)) ||
        (enemy.includes(index) &&
          enemy.includes(index + 2) &&
          enemy.includes(index + 4))
      ) {
        turn = 3;
        console.log("waaa");
      }
    }
  }
  if (turn == 3) {
    youwin = 2;
  }
  wincheck(youwin);
}
function wincheck(n) {
  if (n) {
  }
}
