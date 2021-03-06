TODO:
//zadanie 0

// const add = (a, b) => {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   } else if (typeof a === "number" && typeof b === 'undefined') {
//     return a;
//   }
//   return "Niepoprawny parametr";
// };

// console.log('powinno dodać', add(5, 6) === 11);
// console.log('powinno podać jedną wartość', add(5) === 5);
// console.log('zwraca string', add('5') ==='Niepoprawny parametr')
// console.log('zwraca string', add(5, '6') ==='Niepoprawny parametr')
// console.log('zwraca string', add('') ==='Niepoprawny parametr')

TODO:
//zadanie 1

//wprowadzenie do TDD

// const add = (a, b) => {
//   //pierwszy etap

//   // if (a && b) {
//   //   return a + b;
//   // }
//   // return a;

//   //refaktor
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   } else if (typeof a === "number" && typeof b === "undefined") {
//     return a;
//   }
//   return "Niepoprawny parametr";
// };

// console.log("metoda add powinna dodać dwie liczby", add(5, 5) === 10);
// console.log("metoda add powinna wyświetlić jedną liczbę", add(5) === 5);
// console.log(
//   "metoda add powinna zwrócić string jeśli pierwszy parametr nie jest liczbą",
//   add("5", 5) === "Niepoprawny parametr"
// );
// console.log(
//   "metoda add powinna zwrócić string jeśli żaden parametr nie jest liczbą",
//   add("5", "5") === "Niepoprawny parametr"
// );
// console.log(
//   "metoda add powinna zwrócić string jeśli drugi parametr nie jest liczbą",
//   add(5, "5") === "Niepoprawny parametr"
// );
// console.log(
//   "metoda add powinna zwrócić string jeśli brak parametru",
//   add() === "Niepoprawny parametr"
// );


// const sub = (a, b) => {
//   if (typeof a === "number" && typeof b === "number") {
//     return a - b;
//   } else if (typeof a === "number" && typeof b === "undefined") {
//     return a;
//   }
//   return "Niepoprawny parametr";
// };

// console.log("metoda sub powinna odjąć dwie liczby", sub(5, 5) === 0);
// console.log("metoda sub powinna wyświetlić jedną liczbę", sub(5) === 5);
// console.log("metoda sub powinna zwrócić string jeśli pierwszy parametr nie jest liczbą", sub("5", 5) === "Niepoprawny parametr");
// console.log("metoda sub powinna zwrócić string jeśli żaden parametr nie jest liczbą", sub("5", "5") === "Niepoprawny parametr");
// console.log("metoda sub powinna zwrócić string jeśli drugi parametr nie jest liczbą", sub(5, "5") === "Niepoprawny parametr");
// console.log("metoda sub powinna zwrócić string jeśli brak parametru", sub() === "Niepoprawny parametr");

// //mnożenie i dzielenie na to samo kopyto

TODO:
//zadanie2