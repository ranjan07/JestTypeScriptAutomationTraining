const point = { x: 1, y: 2, z: 3 };
let a = point.x;
let b = point.y;

const {x, z} = point;

[a, b] = [b, a]; // swap values
// console.log(a, b);


// console.log(x, y);

// Complex destructuring example
// const {
//  user: { profile: { name, email } },
//  settings: { theme = 'light', ...otherSettings }
// } = apiResponse;

const user = {
    id: 1,
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
}

const { address: { city, country }, ...others } = user;
// console.log(city, country, others);

// Rest operator in array destructuring
const arr = [1, 2, 3, 4, 5];

const [first, second, third, ...anything] = arr;
// console.log(first, second, third, anything);

function sum(...numbers: number[]): number {
 let res = 0;
    for (const num of numbers) {
        res += num;
    }
    return res;
}

// console.log(sum(1, 2, 3));


// type off

let num = "true";

// if (typeof num === "string") { num = num.toUpperCase()}

// console.log(num);
if(10 in arr) {
    console.log("yes");
}

// Real world use case

const apiResponse = {
    status: 'success',
    code: 200,
    data: {
        apiString: 'some data',
    }
}

if(apiResponse.data.apiString in apiResponse.data) {
    // execute operations
}

// class Person {}
// class Employee extends Person {}
// const alice = new Person();

// console.log(alice instanceof Employee);

const names = ['Alice', 'Bob', '_Charlie'];

// console.log(new Number(5) instanceof Number);

let reponse: string | number = "20";

if (typeof reponse === "string") {
    // reponse = new String(reponse).toString(); 
    console.log((reponse as string).toUpperCase());
} else {
    console.log((reponse as number).toFixed(2));
}

type Cat = {
    meow: () => void;
    name: string;
};

type Dog = {
    bark: () => void;
    name: string;
};

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).meow !== undefined;
}

function makeSound(animal: Cat | Dog) {
    if (isCat(animal)) {
        animal.meow();
    } else {
        animal.bark();
    }
}

const pet1: Cat = {
    meow: () => console.log("Meow!"),
    name: "Whiskers"
};

const pet2: Dog = {
    bark: () => console.log("Woof!"),
    name: "Rex"
};

function makeSound2(animal: Cat | Dog) {
    if((animal as Cat).meow) {
        (animal as Cat).meow();
    } else {
        (animal as Dog).bark();
    }
}

// makeSound2(pet1);

const value: unknown = "Hello, World!";
console.log((value as string).toUpperCase());


type User = {
    id: number;
    name: string;
    email?: string;
}

// console.log(({ id: 2, name: 'Aaryan'} as User).email!.toLowerCase());

// Inheritance
class Car {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    start() {
        console.log(`${this.name} started.`);
    }
}

class Engine extends Car {
    constructor(name: string) {
        super(name);
    }
    start() {
        super.start();
        console.log(`${this.name} engine is running.`);
    }
}

// const myCar = new Car('X1'); 
// const myEngine = new Engine('V8');   
// myEngine.start();

// Encapsulation
class BankAccount {
    private balance: number;
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    withdraw(amount: number): boolean {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    getBalance(): number {
        return this.balance;
    }
}

// const aryanAccount = new BankAccount(1000);
// aryanAccount.deposit(500);
// aryanAccount.withdraw(200);
// console.log(aryanAccount.getBalance());


// Polymorphism
class Shape {
    area(): number {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    area(): number {
        return this.width * this.height;
    }
}

// const myRect = new Rectangle(5, 10);
// console.log(myRect.area());

// Abstraction
abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("Moving...");
    }
}

class Dog2 extends Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

// const myDog = new Dog2();
// myDog.makeSound();
// myDog.move();


interface Logger {
  log(message: string): void;
}
class ConsoleLogger implements Logger {
  log(msg: string) {
    console.log(msg);
  }
}
const logger: Logger = new ConsoleLogger();
logger.log("Hello, Logger!");