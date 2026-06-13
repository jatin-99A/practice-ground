# TypeScript Learning Roadmap

## 1. Core Basics & Type System

### Type Inference vs Explicit Typing

Understand how TypeScript automatically infers types versus when you should explicitly declare them.

### Basic & Primitive Types

Master the following fundamental types:

* `string`
* `number`
* `boolean`
* `array`
* `tuple`
* `enum`

### Any vs Unknown

Learn why `unknown` is safer than `any` and how it requires type checking before usage.

### Void vs Never

Differentiate between:

* `void` → A function that returns nothing.
* `never` → A function that never completes execution or always throws an error.

### Type Aliases vs Interfaces

Know when to use:

#### Type Aliases (`type`)

* Unions
* Primitives
* Complex type compositions

#### Interfaces (`interface`)

* Object shapes
* Declaration merging
* Class contracts

---

## 2. Advanced Types & Manipulation

### Union & Intersection Types

Combine multiple types using:

* Union (`|`) — OR relationship
* Intersection (`&`) — AND relationship

### Type Assertions

Override TypeScript's inferred types using:

```ts
value as Type
```

or

```ts
<Type>value
```

### Literal Types & Template Literal Types

#### Literal Types

Restrict variables to exact values:

```ts
type Direction = "left" | "right";
```

#### Template Literal Types

Manipulate strings at the type level:

```ts
type EventName = `on${string}`;
```

### Discriminated Unions

Use a common literal property (such as `kind` or `type`) to safely distinguish between union members.

### Type Guards & Narrowing

Implement type-safe narrowing using:

* `typeof`
* `instanceof`
* `in`
* Custom type predicates

Example:

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

---

## 3. Generics & Utility Types

### Generic Functions & Classes

Create reusable, type-safe code using type parameters:

```ts
function identity<T>(value: T): T {
  return value;
}
```

### Generic Constraints

Restrict generic parameters using `extends`.

Example:

```ts
function getLength<T extends { length: number }>(item: T) {
  return item.length;
}
```

### Built-in Utility Types

#### Partial<T>

Makes all properties optional.

#### Required<T>

Makes all properties required.

#### Readonly<T>

Makes all properties immutable.

#### Pick<T, K>

Select specific properties from a type.

#### Omit<T, K>

Remove specific properties from a type.

#### Record<K, T>

Create an object type with specified keys and values.

#### ReturnType<T>

Extract a function's return type.

---

## 4. Meta-Programming & Complex Types

### Conditional Types

Implement type-level conditionals:

```ts
T extends U ? X : Y
```

### Infer Keyword

Extract inner types dynamically.

Example:

```ts
type ElementType<T> = T extends (infer U)[] ? U : T;
```

### Mapped Types

Transform existing types dynamically using:

```ts
[key in keyof T]
```

Example:

```ts
type ReadonlyType<T> = {
  readonly [K in keyof T]: T[K];
};
```

### Index Signatures & Lookup Types

#### Index Signatures

```ts
interface Dictionary {
  [key: string]: string;
}
```

#### Lookup Types

```ts
type Name = User["name"];
```

### Decorators

Understand:

* Class decorators
* Method decorators
* Property decorators
* Parameter decorators

Also learn the differences between:

* Experimental TypeScript decorators
* TC39 standard decorators

---

## 5. Classes & Object-Oriented Programming (OOP)

### Access Modifiers

Control member visibility using:

* `public`
* `private`
* `protected`
* JavaScript native `#private`

### Abstract Classes vs Interfaces

#### Abstract Classes

* Runtime inheritance
* Shared implementation

#### Interfaces

* Structural typing
* Contract definitions

### Readonly Properties

Prevent reassignment after initialization.

Example:

```ts
class User {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
```

### Parameter Properties

Shorthand syntax for declaring and initializing members directly in constructors.

Example:

```ts
class User {
  constructor(public name: string, private age: number) {}
}
```

---

## 6. Configuration, Modules & Ecosystem

### tsconfig.json Mastery

Understand important compiler options:

* `strict`
* `noImplicitAny`
* `strictNullChecks`
* `target`
* `moduleResolution`

### Ambient Modules & Declaration Files

Learn how to:

* Write `.d.ts` files
* Use `declare`
* Add types for JavaScript libraries

### Module Systems

Understand differences between:

#### CommonJS

```js
const module = require("./module");
```

#### ES Modules

```ts
import { module } from "./module";
```

### Type-Only Imports

Optimize bundle output using:

```ts
import type { User } from "./types";
```

---

# Summary Checklist

* [ ] Type Inference vs Explicit Typing
* [ ] Basic & Primitive Types
* [ ] Any vs Unknown
* [ ] Void vs Never
* [ ] Type Aliases vs Interfaces
* [ ] Union & Intersection Types
* [ ] Type Assertions
* [ ] Literal & Template Literal Types
* [ ] Discriminated Unions
* [ ] Type Guards & Narrowing
* [ ] Generic Functions & Classes
* [ ] Generic Constraints
* [ ] Utility Types
* [ ] Conditional Types
* [ ] Infer Keyword
* [ ] Mapped Types
* [ ] Index Signatures & Lookup Types
* [ ] Decorators
* [ ] Access Modifiers
* [ ] Abstract Classes vs Interfaces
* [ ] Readonly Properties
* [ ] Parameter Properties
* [ ] tsconfig.json
* [ ] Ambient Modules & Declaration Files
* [ ] CommonJS vs ES Modules
* [ ] Type-Only Imports
