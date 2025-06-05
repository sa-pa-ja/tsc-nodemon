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

// interface Box<T> {
//     value: T;
// }

// const numberBox: Box<number> = {value: 42};
// const stringBox: Box<string> = {value: "Hello, world!"};

// console.log(numberBox);
// console.log(stringBox);

// let variableName: any;
// variableName = "Hello world!";
// console.log(variableName);
// variableName = 4500;
// console.log(variableName);

// let trusting: unknown = "Lucy";

// if (typeof trusting === "string") {
//     console.log(trusting.toUpperCase());
// } else {
//     console.log("Verify before trusting");
// }

// let myName: string = "Alice";
// console.log(myName.slice(2,5));

// function message(person: string): void {
//   console.log("hello, how are you? " + person);
// }

// message("Alice");

// function longMessage(name: string, age: number): string {
//     return `Hello ${name} and my age ${age}`;
// }

// console.log(longMessage("Alice", 5000));

const burgerPromise = new Promise((resolve, reject) => {
  const isKitchenOpen = true;
  if (isKitchenOpen) {
    setTimeout(() => {
      resolve("Here is your burger");
    }, 2000);
  } else {
    reject("Sorry kitchen closed");
  }
});

burgerPromise
  .then((burger) => console.log(burger))
  .catch((error) => console.log(error));
