export function sum(a: number, b: number): number {
    return a + b;
}

export function shopping_cart(): string[] {
    return ["Milk", "T-shirts", "XBox", "PS5"];
}

export function login(callback) {
    callback('Login success');
}

export function fetchData(callback) {
    setTimeout(() => callback('Data fetched', 1000))
}

export const calculator = {
    add: (a, b) => a + b
}