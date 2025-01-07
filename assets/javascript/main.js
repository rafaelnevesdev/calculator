// Seleciona os elementos principais
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

// Variáveis para controle da calculadora
let numeroAtual = '';
let numeroAnterior = '';
let operacao = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        // Decide o que fazer com base no botão clicado
        // forEach percorre todos os botões da calculadora
        // addEventListener adiciona um "escutador de cliques" para cada botão
        // textContent pega o texto dentro do botão clicado
    });
});
