export async function fetchData(userId: string): Promise<string> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/"+ userId);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}