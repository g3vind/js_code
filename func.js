// const calcArea = function (radius) {
//   area = 3.14 * radius ** 2;
//   return console.log(area);
// };

// calcArea(7);

// const calcArea = (radius) => 3.14 * radius ** 2;
// console.log(calcArea(7));

// const greet = () => "hello";
// console.log(greet());

// const bill = (products, tax) => total;
// let total = 0;
// let products = 0;
// for (let i = 0; i < products.length; i++) {
//   total += products[i] + products[i] * tax;
// }

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([100, 200, 300, 400], 0.2)); // 1200

const fName = "govind";
console.log(fName.toUpperCase());
