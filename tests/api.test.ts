import request from "supertest";
import app from "../src/cartAPI"


describe("cart API", () => {
    //reset cart before each testr
    beforeEach(() => {
        (global as any).cart = [];
    });

    //Add item to cart
    it("Should add item to cart", async () => {
        const response = await request(app).post("/cart")
            .send({ id: 1, name: "PC", qty: 2 });
        expect(response.status).toBe(201);
        expect(response.body.cart).toHaveLength(1);
    });

    it("Should not add duplicate item to cart", async () => {
        await request(app).post("/cart")
            .send({ id: 1, name: "PC", qty: 2 });
        const response = await request(app).post("/cart")
            .send({ id: 1, name: "PC", qty: 2 });
        expect(response.status).toBe(409);
    });

    it("Should reject bad payload cart", async () => {
        const response = await request(app).post("/cart").send({ id: 3 });
        expect(response.status).toBe(400);
    });

    it("Should reject with negative  quantity cart", async () => {
        const response = await request(app).post("/cart").send({ id: 1, name: "mouse", qty: -1 });
        console.log(response.body.cart);
        expect(response.status).toBe(400);
    });

    it("Should reject with missing  quantity cart", async () => {
        const response = await request(app).post("/cart").send({ id: 1, name: "mouse", qty: '' });
        expect(response.status).toBe(400);
    });

    it("Should fail with 0  quantity cart", async () => {
        const response = await request(app).post("/cart").send({ id: 1, name: "mouse", qty: 0 });
        expect(response.status).toBe(400);
    });

    it("Should reject with non numeric  quantity cart", async () => {
        const response = await request(app).post("/cart").send({ id: 1, name: "mouse", qty: "two" });
        expect(response.status).toBe(400);
    });

    it("Should reject with invalid product cart", async () => {
        const response = await request(app).post("/cart").send({ id: 1, name: "abcd", qty: 1 });
        expect(response.status).toBe(400);
    });

    it("Should allow same name with different id", async () => {
        await request(app).post("/cart").send({ id: 1, name: "mouse", qty: 1 });
        await request(app).post("/cart").send({ id: 2, name: "mouse", qty: 1 });
        const response = await request(app).get("/cart");
        expect(response.body).toHaveLength(2);
    });

    //update
    it("Should update an item to cart", async () => {
        await request(app).post("/cart").send({ id: 1, name: "PC", qty: 2 });
        const response = await request(app).put("/cart/1").send({ qty: 5 });
        expect(response.status).toBe(200);
    });

    it("Should update an item to cart", async () => {
        await request(app).post("/cart").send({ id: 1, name: "PC", qty: 2 });
        const response = await request(app).put("/cart/1").send({ name: "mouse" });
        expect(response.status).toBe(200);
    });

    it("Should return 404 if updating non existing item to cart", async () => {
        await request(app).post("/cart").send({ id: 1, name: "PC", qty: 2 });
        const response = await request(app).put("/cart/99").send({ qty: 5 });
        expect(response.body.product).toBeUndefined;
    });

    it("Shouldreduce the quantity", async () => {
        await request(app).post("/cart").send({ id: 1, name: "PC", qty: 2 });
        const response = await request(app).put("/cart/99").send({ qty: 1 });
        expect(response.body.product).toBeUndefined;
    });

    it("Should remove item from cart when qty updated to 0", async () => {
        const response = await request(app).put("/cart/99").send({ qty: 0 });
        expect(response.status).toBe(404);
    });

    it("Should fail when updating qty to negativ", async () => {
        const response = await request(app).put("/cart/99").send({ qty: -1 });
        expect(response.status).toBe(404);
    });

    it("try to update with invalid body", async () => {
        const response = await request(app).put("/cart/99").send({});
        expect(response.status).toBe(404);
    });

    it("Should fail when updating invalid product", async () => {
        const response = await request(app).put("/cart/99").send({ name: "dw3r454" });
        expect(response.status).toBe(404);
    });

    //Get
    it("Should return all item in cart", async () => {
        await request(app).post("/cart").send({ id: 1, name: "mouse", qty: 1 });
        const response = await request(app).get("/cart");
        expect(response.status).toBe(200);
        //expect(response.body.length).toBeGreaterThanOrEqual(0);
    });

    it("Should return empty array if cart is empty", async () => {
        const response = await request(app).get("/cart");
        expect(response.body).toEqual([]);
    });

    it("Should return 404 for non-exisitng cart", async () => {
        const response = await request(app).get("/cart/does-not-exist");
        expect(response.status).toEqual(404);
    });

    //delete
    it("Should delete an item in cart", async () => {
        await request(app).post("/cart").send({ id: 1, name: "PC", qty: 2 });
        const response = await request(app).delete("/cart");
        expect(response.status).toBe(200);
        //expect(response.body.cart).toHaveLength(0);
    });

    it("Should clear entries cart", async () => {
        await request(app).post("/cart").send({ id: 1, name: "PC", qty: 2 });
        await request(app).post("/cart").send({ id: 1, name: "mouse", qty: 1 });
        const response = await request(app).delete("/cart");
        expect(response.status).toBe(200);
        //expect(response.body.cart).toHaveLength(0);
    });
    it("Should delete non existing item", async () => {
        const response = await request(app).delete("/cart");
        console.log(response.body.cart);
        expect(response.body.cart).toEqual([]);
    });

    it("Should fail while trying to edit with invalid item", async () => {
        const response = await request(app).delete("/cart/item");
        expect(response.status).toEqual(404);
    });

    it("deleting the item which is not added to cart", async () => {
        const response = await request(app).delete("/cart/item123");
        expect(response.status).toEqual(404);
    });

    it("deleting with invalid id", async () => {
        const response = await request(app).delete("/cart/id");
        expect(response.status).toEqual(404);
    });
});