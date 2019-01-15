
const getElementAndAddClickListener = (id, func) => {
    const element = document.getElementById(id);
    element.onclick = func;
    return element;
};

let display = document.getElementById('display');
let answer = document.getElementById('answer');

const initialState = {
    operations: [],
    value: 0,
};

const operators = ['+', '-', '/', '*'];

const state = { ...initialState};

const setDisplay = (text = '') => { display.textContent = text };

const setAnswer = (value = 0) => { answer.textContent = value };

const renderNewState = () => {
    setDisplay(state.operations.join(''));
    setAnswer(state.value);
};

const updateState = newState => {
    Object.keys(newState).forEach(key => state[key] = newState[key]);
    renderNewState();
};

const addOperation = ({ target: { textContent: operation } }) => {
    const { operations } = state;
    if(operations.length === 0) return;
    if(operators.includes(operations[operations.length - 1]) && operators.includes(operation)) return;
    updateState({ operations: [...operations, operation] });
};

const clearDisplay = () => {
    updateState(initialState);
    setDisplay();
};

const calculate = () => {
    const { operations } = state;
    state.value = eval(operations.join(''));
    renderNewState();
};

const one = getElementAndAddClickListener('1', addOperation);
const two = getElementAndAddClickListener('2', addOperation);
const three = getElementAndAddClickListener('3', addOperation);
const four = getElementAndAddClickListener('4', addOperation);
const five = getElementAndAddClickListener('5', addOperation);
const six = getElementAndAddClickListener('6', addOperation);
const seven = getElementAndAddClickListener('7', addOperation);
const eight = getElementAndAddClickListener('8', addOperation);
const nine = getElementAndAddClickListener('9', addOperation);
const zero = getElementAndAddClickListener('0', addOperation);
const add = getElementAndAddClickListener('+', addOperation);
const subtract = getElementAndAddClickListener('-', addOperation);
const divide = getElementAndAddClickListener('/', addOperation);
const multiply = getElementAndAddClickListener('*', addOperation);
const equals = getElementAndAddClickListener('=', calculate);
const clear = getElementAndAddClickListener('clear', clearDisplay);