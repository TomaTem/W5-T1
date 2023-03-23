// Задача 2
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!'

function replace(str) {
    let result = str.replaceAll("@", "!");
    return result;
}

console.log(replace('aaa@bbb@ccc'))