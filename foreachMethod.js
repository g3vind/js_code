const people = ["govind", "kishan", "mohit", "abhilash"];
// people.forEach(function () {
//   console.log("something");
// });

// output:
// something;
// something;
// something;
// something;

people.forEach(function (person, index) {
  console.log(index, person);
});

// govind
// kishan
// mohit
// abhilash
