// 12
// Реализуйте функцию generateRange(min, max, step),
// которая принимает три аргумента и генерирует диапазон 
// целых чисел от min до max с шагом step. 
// min — левая граница диапазона,
// max — правая граница диапазона
// step — шаг. 
// (мин < макс)

// ПРИМЕР
// generateRange(2, 10, 2) => [2,4,6,8,10]
// generateRange(1, 10, 3) => [1,4,7,10]

function generateRange(min, max, step) {
    let arr = [];
    for (i=min; i<=max; i+=step) {
        arr.push(i);
    }
    return arr;
}

console.log(generateRange(2, 10, 2));
console.log(generateRange(1, 10, 3));