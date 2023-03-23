// Задача 8
// Дана строка с буквами, пробелами и цифрами. 
// Найдите сумму всех чисел из данной строки.

function sum(str) {
    let regexp = /-?\d+\.?\d*/g;
    let numbers = str.match(regexp);
    let sum = numbers.reduce((acc, el) => acc=acc+ +el, 0);
    return sum;
}

console.log(sum("64 кота и 2 собаки съели 10кг корма и выпили0.99литра воды -2попугая"))