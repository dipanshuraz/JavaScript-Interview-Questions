//  call, apply & bind method in JavaScript

// Origin:
// call() and apply() - EcmaScript 3
// bind() - EcmaScript 5

// Uses

// You can use call() / apply() to invoke the function immediately. and only difference between them is "call" requires args one by one spearted but in "apply" - args can be passed as array.

// bind() returns a bound function which can we executed later, will have the correct context("this") for calling the original function.So bind() can be used when the function needs to be called later in certain events when it's useful.

// Call

let name = {
  firstName: "Deepanshu",
  lastName: "Prajapati",
}
let printFullName = function (city, country) {
  console.log(`My Name is ${this.firstName} ${this.lastName}. I am from ${city}, ${country}`)
}
let name2 = {
  firstName: "Ravi",
  lastName: "Kumar",
}

// function borrowing
printFullName.call(name, "kanpur", "India")
printFullName.call(name2, "delhi")

// Apply 

let name = {
  firstName: "Deepanshu",
  lastName: "Prajapati",
}
let printFullName = function (city, country) {
  console.log(`My Name is ${this.firstName} ${this.lastName}. I am from ${city}, ${country}`)
}
let name2 = {
  firstName: "Ravi",
  lastName: "Kumar",
}

// function borrowing
printFullName.apply(name, ["kanpur", "India"])
printFullName.apply(name2, ["delhi"])

// Bind

let printMyName = printFullName.bind(name, "kanpur", "India")
printMyName()