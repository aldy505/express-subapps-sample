import polka from "polka";
import * as middleware from "../middleware/parser"

const app = polka();

let products = [
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

app.get("/", (req, res) => res
  .writeHead(200, { "Content-Type": "application/json"})
  .end(JSON.stringify({products})));

app.put("/", middleware.parser, (req, res) => {
  products.push(req.body);
  res.writeHead(200, { "Content-Type": "application/json"}).end(JSON.stringify({product: req.body}))
})

export default app;
