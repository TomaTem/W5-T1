// 14
// сгенерировать num чисел до 100 и отсортировать их 
// в порядке возрастания

function generate(num) {
    let arr = [];
    for (i=1; i<=num; i++) {
        arr.push(Math.floor(Math.random() * 100 + 1));
    }
    return arr.sort((a, b) => a - b);
}

console.log(generate(10));
console.log(generate(100));