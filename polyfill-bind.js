// Default Bind

let name = {
  firstName: 'Deepanshu',
  lastName: 'Prajapati'
}

function printName() {
  console.log(`My name is ${this.firstName} ${this.lastName}`)
}

let printMyName = printName.bind(name)

printMyName()


// bind() polyfill

Function.prototype.Mybind = function (...args) {
  let obj = this
  let params = args.slice(1)

  return function (...args2) {
    obj.apply(args[0], [...params, ...args2])
  }
}


let printMyName2 = printName.Mybind(name)

printMyName2()
