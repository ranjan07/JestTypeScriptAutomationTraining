// let --> value can be reassigned
let a: number = 5;
a = 10;
// const --> value cannot be reassigned
const pi: number = 3.14;
// pi = 3.15; // This will cause an error
let b: number = 10;
let message: string = "Hello, TypeScript!";
let isActive: boolean = true;
let list: number[] = [1, 2, 3, 4, 5];

// console.log(`The sum of a and b is: ${a + b}`);
// console.log(message);
// console.log(`Is active: ${isActive}`);
// console.log(`List: ${list}`);

// Union type example
let x: number | string | boolean = 100;
x = "Now I'm a string";
x = true;

// console.log(`Value of x: ${x}`);

// Any type example
let y: any = 50;
y = "Now I'm a string";
y = false;
y = [1,23,4];

// console.log(`Value of y: ${y}`);

// type assertion example
let z = y as number;
z = 200;
// console.log(`Value of z: ${z}`);

let obj = {
    name: "Aaryan",
    role: "Trainer",
    salary: 50000,
    exp: 10
}

console.log(obj);