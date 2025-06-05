// let Name: string = "Hello, my main module!";
// console.log(Name.toUpperCase());

// function Greet(name: string, date: Date) {
//   console.log(`Hello, ${name}, today is ${date.toDateString()}!`);
// }

// Greet("User", new Date());

// function greet(name: string, date: Date) {
//   console.log(`Hello, ${name}, today is ${date.toDateString()}!`);
// }

// greet("Lucy", new Date());

let Names: string[] = ["Mona", "Lina", "Sana"];

Names.forEach((x) => console.log(x.toUpperCase()));

let Numbers: Array<number> = [1, 2, 3, 4, 5];
Numbers.forEach((a) => console.log(a ** 2));

// const camelCase = void(42);
// console.log(typeof camelCase); // "number"
// const snake_case = "Hello, world!";
// console.log(typeof snake_case); // "string"
// const PascalCase = true;
// console.log(typeof PascalCase); // "boolean"
// const kebabCase = { key: "value" };
// console.log(typeof kebabCase); // "object"

function echo<T>(input: T): T {
  return input;
}

// const a = echo<number>(42);
// const b = echo<string>("Hello, my love Lucy");
// console.log(typeof a);
// console.log(typeof b);

// function getFormat<T>(items: T[]): T {
//   return items[0];
// }

// const firstNum = getFormat<number>([1, 2, 3, 4, 5]);
// console.log(firstNum);
// console.log(typeof firstNum);

// const firstStr = getFormat<string>(["Mona", "Lucy", "Rouse"]);
// console.log(firstStr);
// console.log(typeof firstStr);




