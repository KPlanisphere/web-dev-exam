let operacionActual = null;
let valorActual = '';
let valorAnterior = '';

function appendNumber(number) {
  // Evitar multiples decimales
  if (number === '.' && valorActual.includes('.')) return;
  valorActual += number;
  updateDisplay();
}

function setOperation(operator) {
  if (valorActual === '') return;
  if (valorAnterior !== '' && operacionActual !== null) {
    calculate();
  }
  operacionActual = operator;
  valorAnterior = valorActual;
  valorActual = '';
}

function calculate() {
  let calculation;
  const anterior = parseFloat(valorAnterior);
  const actual = parseFloat(valorActual);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch (operacionActual) {
    case '+':
      calculation = anterior + actual;
      break;
    case '-':
      calculation = anterior - actual;
      break;
    case '*':
      calculation = anterior * actual;
      break;
    case '/':
      if (actual === 0) {
        alert("No puedes dividir entre cero");
        return;
      }
      calculation = anterior / actual;
      break;
    default:
      return;
  }
  valorActual = calculation.toString();
  operacionActual = null;
  valorAnterior = '';
  updateDisplay();
}

function clearDisplay() {
  valorActual = '';
  valorAnterior = '';
  operacionActual = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('calc-display').value = valorActual;
}
