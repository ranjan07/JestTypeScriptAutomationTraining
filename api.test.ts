import { fetchData } from "./api";
import fetchMock from "jest-fetch-mock";


beforeEach(() => {
    fetchMock.resetMocks();
});

test('fetches user data successfully', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ id: 1, title: "delectus aut autem" }));

    const data = await fetchData("1");
    expect(fetchMock).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos/1");
    expect(data).toEqual({ id: 1, title: "delectus aut autem" });
});

// test("fetchData returns data when response is ok", async () => {
//     fetchMock.mockResponseOnce(JSON.stringify({ id: 1, name: "John Doe" }));

//     const data = await fetchData("1");
//     expect(data).toEqual({ id: 1, name: "John Doe" });
//     expect(fetchMock).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users1");
// });