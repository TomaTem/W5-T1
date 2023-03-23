// Задача 6
// Дана строка 'ahb acb aeb aeeb adcb axeb'. 
// Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону: 
// буква 'a', любой символ, буква 'b'.

function search(str) {
    let regexp = /a.b/g;
    let arr = str.match(regexp);
    return arr;
}

console.log(search('ahb acb aeb aeeb adcb axeb'))