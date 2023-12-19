import {results} from './result.js';
import {displayCPU, displayPlayer} from './app.js';
export let resultPlayer = 0;
export let resultCPU = 0;
function updateResult() {
  results(resultCPU, resultPlayer);
  displayPlayer.innerHTML = resultPlayer;
  displayCPU.innerHTML = resultCPU;
}
// funtion WIM
export function win(numPlayer, numCpu) {
  if(numPlayer === 0 && numCpu === 2){
    resultPlayer++
    // console.log('player gano');
  }
  if(numPlayer === 1 && numCpu === 0){
    resultPlayer++
    // console.log('player gano');
  }
  if(numPlayer === 2 && numCpu === 1){
    resultPlayer++
    // console.log('player gano');
  }
  // console.clear(); 
  updateResult();
}
// funtion LOSER
export function loser(numPlayer, numCpu) {
  if(numPlayer === 0 && numCpu === 1){
    resultCPU++;    
    // updateResult()
    // console.log('cpu gano');
  }
  if(numPlayer === 1 && numCpu === 2){
    resultCPU++;    
    // updateResult()
    // console.log('cpu gano');
  }
  if(numPlayer === 2 && numCpu === 0){
    resultCPU++;    
    // console.log('cpu gano');
  }
  // console.clear(); 
  updateResult();
}
// funtion DAW
// export function draw(numPlayer, numCpu) {
//   if(numPlayer === 0 && numCpu === 0){
//     console.log('empate');
//   }
//   if(numPlayer === 1 && numCpu === 1){
//     console.log('empate');
//   }
//   if(numPlayer === 2 && numCpu === 2){
//     console.log('empate');
//   }
// }
// reset result
export function resetResult() {
  resultCPU = 0;
  resultPlayer = 0;
  updateResult()
}