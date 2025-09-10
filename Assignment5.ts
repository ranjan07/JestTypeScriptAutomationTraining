function wrapInArray<T>(x: T): T[] {
    return [x];
}

const numArray = wrapInArray(7); //[7]
const stringArray = wrapInArray("Hello"); //["Hello"]


interface ApiResponse<T> {
    success: boolean;
    data: T;
}

//User object
const userResponse: ApiResponse<{ id: number, username: string }> = {
    success: true,
    data: {
        id: 1,
        username: "Ranjan_Kumar"
    }
}

//List of book titles
const booksResponse: ApiResponse<string[]> = {
    success: true,
    data: ["Learning Typescript", "Learning Jest"]
}