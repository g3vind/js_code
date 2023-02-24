function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

function callMe() {
  console.log("I am callback function");
}

//passing func as argg
greet("Govind", callMe);
