import { win, loser, resetResult } from "./funcionalidad.js";

// variables
export const displayCPU = document.getElementById('displayCPU');
export const displayPlayer = document.getElementById('displayPlayer');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const reset = document.getElementById('reset');
const cpu = document.getElementById('cpu');
const player = document.getElementById('player');
// const display = document.querySelector('.display');
let playerSelect;
let cpuSelect;

// Colaca los nombres a los elementos seleccionados 
function nameElement(num, num2) {
  if (num === 0) {
    cpu.innerHTML = '👊';
  } else if (num === 1) {
    cpu.innerHTML = '🖐';
  } else if (num === 2) {
    cpu.innerHTML = '✌';
  }
  if (num2 === 0) {
    player.innerHTML = '👊';
  } else if (num2 === 1) {
    player.innerHTML = '🖐';
  } else if (num2 === 2) {
    player.innerHTML = '✌';
  }
}

function updateVariables() {
  win(playerSelect, cpuSelect);
  loser(playerSelect, cpuSelect);
  // draw(playerSelect, cpuSelect);
  // console.log(playerSelect, cpuSelect );
}

// DOM buttons 
rock.addEventListener('click', () => {
  playerSelect = 0;
  cpuSelect = Math.floor(Math.random() * 3);
  nameElement(cpuSelect, playerSelect)
  updateVariables()
});
paper.addEventListener('click', () => {
  playerSelect = 1;
  cpuSelect = Math.floor(Math.random() * 3);
  nameElement(cpuSelect, playerSelect)
  updateVariables()
})
scissors.addEventListener('click', () => {
  playerSelect = 2;
  cpuSelect = Math.floor(Math.random() * 3);
  nameElement(cpuSelect, playerSelect)
  updateVariables()
})

// reset play game
reset.addEventListener('click', () => {
  resetResult()
  cpu.innerHTML = '❔';
  player.innerHTML = '❔';
})