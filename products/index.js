const express = require("express");

const app = express();

const products = [
  {
    title: "iPhone 12 Pro Max Ultra Super Wow",
    price: 16_000_000,
    qty: 3
  },
  {
    title: "Dicoding Javascript Course License",
    price: 200_000,
    qty: 1
  }
]

app.get("/", (req, res) => res.status(200).json({products}));

app.put("/", express.json(), (req, res) => {
  products.push(req.body);
  res.status(200).json({product: req.body})
})

module.exports = app;
