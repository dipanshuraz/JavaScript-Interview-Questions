# JavaScript-Interview-Questions

- [x] call, apply & bind method
- [x] script - async & defer
- [x] JavaScript Functions
- [x] Polyfills - bind()
- [x] Debouncing
- [x] Event Bubbling, Capturing aka Trickling

<hr/>

## call, apply & bind method in JavaScript

<hr/>

### Origin:

call() and apply() - EcmaScript 3
<br>
bind() - EcmaScript 5

### What is Call & Apply ?

Call and Apply are two important tools of advanced JavaScript programming. In JavaScript, a function always have an execution context, called as this. When the function is executed normally, like this foo() the execution context points to the global window object. If the function is a method of an object, the execution context points to that object. For example, in the code obj.foo() the execution context this points to obj.

### Uses

You can use call() / apply() to invoke the function immediately. and only difference between them is "call" requires args one by one spearted but in "apply" - args can be passed as array.

bind() returns a bound function which can we executed later, will have the correct context("this") for calling the original function so bind() can be used when the function needs to be called later in certain events when it's useful.

#### Call

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

#### Apply

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

#### Bind

    let printMyName = printFullName.bind(name, "kanpur", "India")
    printMyName()

#### [To Read a Amazing Story of Call, Apply & Bind](https://www.undefinednull.com/2014/06/26/explaining-call-and-apply-in-javascript-through-mr-dot-dave/)

<hr/>

## script - async & defer

<hr/>

#### Script

The HTML file will be parsed until the script file is hit, at that point parsing will pause and a request is made to fetch the file (if its external). The script with them be executed before parsing is resumed.

    x --parsing-- x                           x ---parsing-- x
                  x --fetch-- x x --execute-- x

#### async

async loads the file (script) during HTML parsing asynchronously but pause when script is loaded and will start executing script after execution parsing again starts parsing.

    x ---------parsing-------- x               x ---parsing-- x
                   x --fetch-- x x --execute-- x

#### defer

defer downloads the file during HTML parsing and will only execute it after the parser has completed.

    x -----parsing----- x x ---parsing-- x
          x ---fetch--- x                x --execute-- x

defer scripts are also guarenteed to executed in the order that appear in the documents.

<hr/>

## JavaScript Functions

<hr/>

funcitons are a kind of subroutine that performs a specific task like every other programming language,

Syntax :

                                                 |---- parameters
                                 function Hello(num) {
                                   console.log(num)
               explicit return -     return 1
                                   }     |------ arguments
                                   Hello(5)

Anonymous function Syntax :

            var Hello = function(){
              return num
            }
    function invocation ---Hello(5)

<hr/>

## Polyfills - bind()

<hr/>

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

[MDN DOCS](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)

#### Default Bind

    let name = {
      firstName: 'Deepanshu',
      lastName: 'Prajapati'
    }

    function printName() {
      console.log(`My name is ${this.firstName} ${this.lastName}`)
    }

    let printMyName = printName.bind(name)

    printMyName()

#### bind() polyfill

      Function.prototype.Mybind = function (...args) {
        let obj = this
        let params = args.slice(1)

        return function (...args2) {
          obj.apply(args[0], [...params, ...args2])
        }
      }


      let printMyName2 = printName.Mybind(name)

      printMyName2()

#### [Must Watch Video - Akshay Saini](https://www.youtube.com/watch?v=ke_y6z0xRpk)

<hr/>

## Debouncing

<hr/>

The debounce() function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called.

index.html

    <p for="fetchData">fetchData</p>
    <input type="text" onkeyup="debouncing()" />

script

      let counter = 0;
      const getData = () => {
        // calls an API and gets Data
        console.log("Fetching Data ..", counter++);
      };
      const debounce = function(fn, d) {
        let timer;
        return function() {
          let context = this;
          let args = arguments;
          clearTimeout(timer);
          timer = setTimeout(() => {
            getData.apply(context, arguments);
          }, d);
        };
      };

      const debouncing = debounce(getData, 400);

<hr />

#### Event Bubbling, Capturing aka Trickling

[JavaScript.info](https://javascript.info/bubbling-and-capturing)

[Medium](https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e)

[Akshay Saini](https://www.youtube.com/watch?v=aVSf0b1jVKk)

<hr/>

#### Currying

[Currying Akshai Saini](https://www.youtube.com/watch?v=vQcCNpuaJO8)

[JavaSCript.info](https://javascript.info/currying-partials)

[Medium](https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe)
