const tabuleiro = document.getElementById('tabuleiro');
const celulas = document.querySelectorAll('[data-celula]');
const status = document.getElementById('status');
const botaoReiniciar = document.getElementById('reiniciar');

let jogadorAtual = 'X';
let jogoAtivo = true;

const combinacoesVencedoras = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]
];

