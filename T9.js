// Задача 9
// Удалите одной регуляркой все повторяющиеся слова из строки, 
// например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.
function cut(str) {
    let words = [];
    return str.replace(/([^\s]+)(\s|$)/g, (match, word) => {
        if (words.includes(word)) return '';
        else {
            words.push(word);
            return match;
        };
    });
}
console.log(cut("dsf xxx xxx sd xxx"))


function cut2(str) {
    let arr = str.split(" ");
    let arr2 = arr.filter((el, i) => arr.indexOf(el) == i)
    return arr2.join(" ")
}
console.log(cut2("dsf xxx xxx sd xxx"))
