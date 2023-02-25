console.log(1);
console.log(2);

// it will take 2 seconds to execute i.e. "async code"
setTimeout(() => {
  console.log("callback function fired");
}, 2000);

console.log(3);
console.log(4);
