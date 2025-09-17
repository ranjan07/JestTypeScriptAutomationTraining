import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

let cart: { id: number; name: string; qty: number }[] = [];

///Add item to cart
app.post("/cart", (req: Request, res: Response) => {
    const { id, name, qty } = req.body;

    if (!id || !name || !qty) {
        return res.status(400).json({ message: "Invalid payload" });
    }

    if (cart.find((item) => item.id == id)) {
        return res.status(409).json({ message: "Item already exist" });
    }
    cart.push({ id, name, qty });
    res.status(201).json({ message: "Item added", cart });
});

//Get all items
app.get("/cart", (req: Request, res: Response) => {
    res.json(cart);
});

//update
app.put("/cart/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { qty } = req.body;

    const item = cart.find((item) => item.id === id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    item.qty = qty;
    res.json({ message: "Item updated", cart });
});

//Delete item
app.delete("/cart", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    cart = cart.filter((item) => item.id !== id);
    res.json({ message: "Item removed", cart });
});

//clear
app.delete("/cart", (req: Request, res: Response) => {
    cart = [];
    res.json({
        message: "Cart cleared", cart
    });
});


export default app;