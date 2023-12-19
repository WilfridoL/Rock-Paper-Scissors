import { results } from './result.js';
import { displayCPU, displayPlayer } from './app.js';

export let resultPlayer = 0;
export let resultCPU = 0;

function updateResult() {
  results(resultCPU, resultPlayer);
  displayPlayer.innerHTML = resultPlayer;
  displayCPU.innerHTML = resultCPU;
}

// funtion WIM
export function win(numPlayer, numCpu) {
  if (numPlayer === 0 && numCpu === 2) {
    resultPlayer++
  }
  if (numPlayer === 1 && numCpu === 0) {
    resultPlayer++
  }
  if (numPlayer === 2 && numCpu === 1) {
    resultPlayer++
  }
  updateResult();
}

// funtion LOSER
export function loser(numPlayer, numCpu) {
  if (numPlayer === 0 && numCpu === 1) {
    resultCPU++;
  }
  if (numPlayer === 1 && numCpu === 2) {
    resultCPU++;
  }
  if (numPlayer === 2 && numCpu === 0) {
    resultCPU++;
  }
  updateResult();
}

// reset result
export function resetResult() {
  resultCPU = 0;
  resultPlayer = 0;
  updateResult()
}