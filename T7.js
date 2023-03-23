// Задача 7
// Определите, что переданная строка является емэйлом. 
// Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru, 
// my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by, 
// mail@yandex.ru.

function isEmail(str) {
    let regexp = /^[\w.-]+@[\w.-]+\.[a-zA-Z]+$/;
    return regexp.test(str);
}

console.log(isEmail("mymail@mail.ru"));
console.log(isEmail("my.mail@mail.ru"));
console.log(isEmail("my-mail@mail.ru"));
console.log(isEmail("my_mail@mail.ru"));
console.log(isEmail("mail@mail.com"));
console.log(isEmail("mail@mail.by"));
console.log(isEmail("mail@yandex.ru"));
console.log(isEmail("mail@yandex.r54777u"));