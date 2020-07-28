"use strict";

/* Через Object.keys */

const countTotalSalary = function (employees) {
  let totalSalary = 0;
  const keys = Object.keys(employees);
  for (const key of keys) {
    totalSalary += employees[key];
  }
  return totalSalary;
};

/* Через Object.value */

// const countTotalSalary = function (employees) {
//   let totalSalary = 0;
//   const values = Object.values(employees);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// };

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
);
