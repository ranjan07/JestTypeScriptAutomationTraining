import { asyncGreet, greet } from "./callback";

test("greet calls the callback with the correct greeting", () => {
    const mockCallback = jest.fn();

    greet("Alice", mockCallback);
    // greet("Alice", mockCallback);

    expect(mockCallback).toHaveBeenCalledWith("Hello, Alice!");
    expect(mockCallback).toHaveBeenCalledTimes(1);
});

test("async greet calls the callback", (done) => {
    function callback(greeting: string) {
        try {
            expect(greeting).toBe("Hello, Bob!");
            done();
        } catch (error) {
            done(error);
        }    
    }
    asyncGreet("Bob", callback);

});