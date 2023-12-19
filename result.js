import {resetResult} from './funcionalidad.js';
export function results(cpu, player) {
  if(cpu === 5){
    // alert('la maquina ha ganado');
    resetResult()
  }else if(player === 5){
    // alert('usted ha ganado');
    resetResult()
  }
}