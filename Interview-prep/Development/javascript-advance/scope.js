//! 1. Global scope
let name = "Rahul";

function show() {
    console.log(name);
}

//! 2. Function Scope
function test() {
    var age = 25;
    console.log(age);
}

//! 3. Block Scope
if (true) {
    let x = 10;
    const y = 20;
}

console.log(x); // We ll get error

//! 4. Module Scope (ES Modules)
// file1.js
const secret = "abc";
export default secret;

//! 5. Lexical Scope (Closure Scope)
function outerFun() {
    const outerVar = 20;

    return function innerFun() {
        return outerVar;
    }
}

console.log(outerFun()())



// this refer to module.exports 
console.log(this === module.exports)

