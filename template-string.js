const title = 'best reads of 2023'
const author = 'Govind'
const likes = 200

//Concatenation Way
// let result = title + " by "+ author +" has "+likes+ " likes"
// console.log(result)

// template string way
let result = ` The ${title} by ${author} has ${likes} likes`
console.log(result)