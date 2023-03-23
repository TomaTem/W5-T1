// Задача 5
// Преобразуйте первую букву каждого слова строки в верхний регистр.
// ПРИМЕР
// ("привет! я хороший человек") -> Привет! Я Хороший Человек"

function capitales(str) {
    let arr = str.split(' ');
    arr.forEach((el, i) => {
        arr.splice(i, 1, el[0].toUpperCase() + el.slice(1));
    })
    return arr.join(' ');
}

console.log(capitales("привет! я хороший человек"));