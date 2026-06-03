# Execution Context (Global, Function)

## Creation Phase (Memory Allocation)

JavaScript code execute hone se pehle memory allocate karta hai.

### Variables
- `var` variables are initialized with **undefined**
- `let` and `const` variables are initialized but stay in **Temporal Dead Zone (TDZ)** (unaccessible state)

### Functions
- Function declarations are stored **completely (entire function body is hoisted)**

### Classes
- Classes are also stored **completely**, but remain in TDZ until initialized

### this Context
- `this` ka value execution context create hote time decide hota hai

---

## Lexical Scope aur Closure

Har Execution Context ke paas ek **Lexical Environment** hota hai, jiske 2 parts hote hain:

### 1. Environment Record
- Yahan store hote hain:
  - Local variables
  - Functions
  - Class declarations

### 2. Reference to Outer Environment
- Parent (outer) lexical environment ka reference hota hai
- Isi se outer scope ke variables access hote hain
- Yehi lexical scoping aur closures ko possible banata hai

---

## Execution Phase

- Code line by line execute hota hai
- Variables ko values assign hoti hain
- Functions invoke hote hain
- Is phase me koi hoisting nahi hoti, sirf execution hota hai