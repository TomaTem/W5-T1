// Задача 3
// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'

function cut(str) {
    let result = str.replace('bbb ', '');
    return result;
}

console.log(cut('aaa bbb ccc'))