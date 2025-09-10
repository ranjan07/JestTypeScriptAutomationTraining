function logInput(input: number | string): void {
    if (typeof input === "number") {
        console.log(`Number: ${input}`);
    } else if (typeof input === "string") {
        console.log(`String: ${input}`);
    }
}

logInput(7);
logInput("Hello World");