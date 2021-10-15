import express from "express";
import products from "./products/index.js";
import users from "./users/index.js";

const app = express();

app.use("/products", products);
app.use("/users", users);

app.get("/", (req, res) => res.send("http://localhost:3000/products or http://localhost:3000/users"))

app.listen(3000, () => console.log("Running on http://localhost:3000"));