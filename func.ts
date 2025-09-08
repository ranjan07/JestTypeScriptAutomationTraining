// function - functions are peice of code that can be reused

function add(a: number, b: number): string {
    return "Sum is " + (a + b);
}

// Function type Annotation
let substract: (a: number, b: number) => number;
substract = (a, b) => a - b;

let multiply = (a: number, b: number): number => a * b;

let result = add(5, 10);
console.log(`${result}`);
console.log(`Substraction is ${substract(5, 4)}`);
console.log(`Multiplication is ${multiply(5, 4)}`);


// Optional and Default Parameters
function greet(name: string, greeting?: string, age?: number): string {
    return `${greeting ? greeting : "Hello"}, ${name} ${age ? ", Age: " + age : ""}`;
}

console.log(greet("Aaryan"));
console.log(greet("Aaryan", undefined, 20));

// Generics
// flexible way to create reusable components
function myFunc<T>(arg: T): T {
    return arg;
}

let r = myFunc<number>(100);
console.log(`Generic Function Result: ${r}`);

let r1 = myFunc<string>("TypeScript");
console.log(`Generic Function Result: ${r1}`);

let r2 = myFunc<boolean>(true);
console.log(`Generic Function Result: ${r2}`);