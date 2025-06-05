# Explicit Types

`Date` should be a `Date` object. We will also use the `toDateString()` method on date.

We will cover some of the most common types of values you will find in JavaScript code, and explain the corresponding ways to describe those types in TypeScript.

Types can also appear in many more **places** than just type annotations. We will start by reviewing the most basic and common types you might encounter when writing JavaScript or TypeScript code.

## The primitives: `string`, `number`, and `boolean`

JavaScript has there very commonly used primitives: `string`, `number`, and `boolean`. Each has a corresponding type in TypeScript.

1. `string` represent string values like `"Hello, my love Lucy"`

2. `number` is for numbers like `42`. JavaScript does not have a special runtime value for integers, so there is no equivalent to `int` or `float` everything is simply `number`

3. `boolean` is for th two values `true` and `false`

Always use `string`, `number`, and `boolean`in TypeScript. Forget about `String`, `Number`, and `Boolean`, as they can cause problems in your code.

## Array

To specify the type of an array like `[11, 22, 33]`, you can use the syntax `number[]`; this syntax works for any type(e.g `string[]` is a array of strings, and so on). You may also see this written as `Array<number>` which means same thing. We will learn more about the syntax `T<U>` when we cover generics.

### What is `<T>` is TypeScript?

When to use it?

1. When you want a function/class to work with any type(numbers, strings, objects, etc)

2. When you want to keep your code flexible but still type-safe
   Imagine a function that return whatever you pass into it:

```typescript
function echo<T>(input: T): T {
  return input;
}
```

`<T>` says: "This function works for any type `T`"

TypeScript automatically infers `<T>` if you omit it:

```typescript
const num = echo(42); // T is inferred as number
```

Array with `<T>`

```typescript
function getFirst<T>(items: T[]): T {
  return items[0];
}

const firstNum = getFirst([1, 2, 3, 4]);
const firstStr = getFirst(["a", "b", "c"]);
```

`T[]` means "an array of whatever type T is"

Interfaces/Classes witt `<T>`

```typescript
interface Box<T> {
  value: T;
}
const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "Hello" };
```



