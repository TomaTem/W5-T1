// Задача 10
// Напишите функцию change_register(str), которая принимает 
// в качестве аргумента строку и и заменяет регистр каждого 
// символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», 
// то на выходе должно быть «кАжДыЙ оХоТнИк».

function change_register(str) {
    let arr = str.split("");
    arr.forEach((el, i) => {
        if (el === el.toUpperCase()) arr.splice(i, 1, el.toLowerCase());
        else arr.splice(i, 1, el.toUpperCase());
    });
    return arr.join("");
}

console.log(change_register("КаЖдЫй ОхОтНиК"));