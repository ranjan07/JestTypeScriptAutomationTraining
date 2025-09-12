import { getDataSuccess, getDataFailure } from "./index";

test("getDataSuccess resolves with 'Hello, World!'", async () => {
    // return getDataSuccess().then((data) => {
    //     expect(data).toBe("Hello, World!");
    // });
    await expect(getDataSuccess()).resolves.toBe("Hello, World!");
});

test("getDataFailure resolves with 'Failed to fetch data'", async () => {
    // return getDataFailure().catch((err) => {
    //     expect(err.message).toBe("Failed to fetch data");
    // });
    await expect(getDataFailure()).rejects.toThrow("Failed to fetch data1");
});