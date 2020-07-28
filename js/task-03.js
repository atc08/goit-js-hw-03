"use strict";

const findBestEmployee = function (employees) {
  let bestEmployee;
  let bestValue = 0;

  /* через for/in */

  for (const key in employees) {
    if (bestValue < employees[key]) {
      bestValue = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};

/* через Object.entries */

//   const entries = Object.entries(employees);
//   for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     if (bestValue < value) {
//       bestValue = value;
//       bestEmployee = key;
//     }
//   }
//   return bestEmployee;
// };

/* через Object.keys */

//   const keys = Object.keys(employees);
//   for (const key of keys) {
//     if (bestValue < employees[key]) {
//       bestValue = employees[key];
//       bestEmployee = key;
//     }
//   }
//   return bestEmployee;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
