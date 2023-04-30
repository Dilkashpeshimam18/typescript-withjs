"use strict";
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const button = document.getElementById('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '' + num2;
    }
    return +num1 + +num2;
}
button.addEventListener('click', () => {
    const num1Value = num1.value;
    const num2Value = num2.value;
    const result = add(+num1Value, +num2Value);
});
console.log(add(1, 6));
console.log(add('1', '6'));
