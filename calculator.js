const screen = document.querySelector('.calculator-screen'),
    keys = document.querySelector('.calculator-keys');

screen.textContent = '0';

let operationStatus, number1, typeOperation;

const calculator = () => {
    if (!keys) return;
    keys.addEventListener('click', e => {
        const t = e.target;
        const d = t.dataset;
        // detectar si se pulsó un número, una operación matemática u otra operación
        d.number ? writeScreen(d.number) : d.math ? getOperation(t, d.math) : runOperation(d.operation);
    });
};

const writeScreen = number => {
    (screen.textContent === '0' && number != '.') || operationStatus ? (screen.textContent = number)
        : number === '.' && screen.textContent.includes('.') ? (screen.textContent = screen.textContent)
            : (screen.textContent += number);
    operationStatus = false;
};

const getOperation = (element, operation) => {
    number1 = Number(screen.textContent);
    operationStatus = true;
    typeOperation = operation;
    screen.textContent = element.textContent;
};

const runOperation = operation => {
    const getResult = () => {
        const number2 = Number(screen.textContent);
        switch (typeOperation) {
            case 'add':
                screen.textContent = number1 + number2;
                break;
            case 'subtract':
                screen.textContent = number1 - number2;
                break;
            case 'multiply':
                screen.textContent = number1 * number2;
                break;
            case 'divide':
                screen.textContent = number2 === 0 ? 'No se puede dividir entre cero' : number1 / number2;
            default:
                break;
        }
    };
    operationStatus = true;
    operation === 'clear' ? (screen.textContent = '0') : getResult();
};

// export default calculator;
