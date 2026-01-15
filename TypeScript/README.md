# TypeScript

TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

For example, JavaScript provides language primitives like string and number, but it doesn’t check that you’ve consistently assigned these. TypeScript does.

This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.

## TypeScript Learning Objectives

### Basic Types in TypeScript
TypeScript provides basic types such as `number`, `string`, `boolean`, `array`, `tuple`, `enum`, `any`, `void`, `null`, and `undefined` to add static typing to JavaScript and catch errors at compile time.

### Interfaces, Classes, and Functions
- **Interfaces** define the shape of objects (properties and methods) without implementation.
- **Classes** are blueprints for creating objects and can implement interfaces.
- **Functions** can have typed parameters and return types to ensure correct usage.

### Working with the DOM and TypeScript
TypeScript allows you to safely interact with the DOM by using typed elements (e.g., `HTMLElement`, `HTMLInputElement`) and type assertions to avoid runtime errors.

### Generic Types
Generics allow you to create reusable components (functions, classes, interfaces) that work with different types while preserving type safety.

### Namespaces
Namespaces are used to organize code and avoid global scope pollution by grouping related variables, functions, and classes.

### Declaration Merging
Declaration merging allows multiple declarations with the same name (such as interfaces or namespaces) to be combined into a single definition.

### Ambient Namespaces
Ambient namespaces are used to describe the shape of external libraries (usually in `.d.ts` files) so they can be used in TypeScript without rewriting them.

### Basic Nominal Typing in TypeScript
Although TypeScript is structurally typed, nominal typing can be simulated using techniques like private or branded properties to distinguish types with the same structure.
