// Реализуйте функцию, принимающую слово и возвращающую количество заглавных букв в нем  
// ПРИМЕР
// ("проКрАСТИНация") -> 6

function capitals(str) {
  let regexpCap = /[A-ZА-ЯЁ]/g;
  let result = str.match(regexpCap);
  if (result) return result.length;
  else return 0;
}

console.log(capitals("45"));
console.log(capitals("проКрАСТИНация"));
console.log(capitals("проация"));