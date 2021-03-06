//zadanie 0
const add = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "number" && typeof b === 'undefined') {
    return a;
  }
  return "Niepoprawny parametr";
};

console.log('powinno dodać', add(5, 6) === 11);
console.log('powinno podać jedną wartość', add(5) === 5);
console.log('zwraca string', add('5') ==='Niepoprawny parametr')
console.log('zwraca string', add(5, '6') ==='Niepoprawny parametr')
console.log('zwraca string', add('') ==='Niepoprawny parametr')
