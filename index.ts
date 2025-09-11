export function getDataSuccess(): Promise<string> {
    return new Promise((resolve) => {
        // resolve("Hello, World!");
        setTimeout(() => {
            resolve("Hello, World!");
        }, 2000);
    });
}

export function getDataFailure(): Promise<string> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Failed to fetch data"));
        }, 2000);
    });
}
// modules.exports = { getDataSuccess, getDataFailure };

// getDataSuccess().then((data) => {
//     console.log(data);
// });

// getDataFailure().catch((error) => {
//     console.error(error.message);
// });