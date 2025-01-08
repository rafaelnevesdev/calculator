// Seleciona os elementos principais
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

// Variáveis para controle da calculadora
let numeroAtualInput = '';
let numeroAnteriorInput = '';
let operacao = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        // Decide o que fazer com base no botão clicado
        // forEach percorre todos os botões da calculadora
        // addEventListener adiciona um "escutador de cliques" para cada botão
        // textContent pega o texto dentro do botão clicado

        if (value === 'AC') {
            limpaTudo(); // Limpa tudo
        } else if (value === '=') {
            calculo(); // Realiza o cálculo
        } else if (['+', '-', '*', '/'].includes(value)) {
            defineOperacao(value); // Define a operação
        } else {
            adicionaNumero(value); // Adiciona números ou ponto
        }
    });
});

// Função para adicionar números ao display
function adicionaNumero(number) {
    if (number === '.' && numeroAtualInput.includes('.')) return; // Impede múltiplos pontos decimais
    numeroAtualInput += number;
    updateDisplay();
}

// Função para definir a operação
function defineOperacao (op) {
    if (numeroAtualInput === '') return;
    if (numeroAnteriorInput !== '') {
        calculo(); // Se já houver um número anterior, calcula antes
    }
    operacao = op;
    numeroAnteriorInput = numeroAtualInput;
    numeroAtualInput = '';
}

// Função para realizar o cálculo
function calculo() {
    const anterior = parseFloat(numeroAnteriorInput);
    const atual = parseFloat(numeroAtualInput);

    if (isNaN(anterior) || isNaN(atual)) return;

    let resultado;
    switch (operacao) {
        case '+':
            resultado = anterior + atual;
            break;
        case '-':
            resultado = anterior - atual;
            break;
        case '*':
            resultado = anterior * atual;
            break;
        case '/':
            resultado = anterior / atual;
            break;
        default:
            return;
    }

    // para continuar somando
    numeroAtualInput = resultado.toString()
    operacao = null;
    numeroAnteriorInput = '';
    updateDisplay();
}

// Função para limpar todos os dados
function limpaTudo() {
    numeroAtualInput = '';
    numeroAnteriorInput = '';
    operacao = null;
    updateDisplay();
}

// Atualiza o valor no display
function updateDisplay() {
    display.value = numeroAtualInput || '0';
}
