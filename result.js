import { modal, modalWin } from './app.js';
export function results(cpu, player) {
  if (cpu === 5) {
    modal.classList.add("active");
    modalWin.innerHTML = "lost";
  } else if (player === 5) {
    modal.classList.add("active");
    modalWin.innerHTML = "won";
  }
}