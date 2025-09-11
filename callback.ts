export function asyncGreet(name: string, callback: (greeting: string) => void): void {
    setTimeout(() => {
        callback(`Hello, ${name}!`);
    }, 1000);
};


export function greet(name: string, callback: (greeting: string) => void): void {
    callback(`Hello, ${name}!`);
}


// greet("Alice", (greeting) => {
//     console.log(greeting); // Outputs: Hello, Alice!
// });