import polka from "polka";
import products from "./products/index";
import users from "./users/index";

const app = polka();

app.use("/products", products);
app.use("/users", users);

app.get("/", (req, res) => res
  .writeHead(200, {"Content-Type": "text/plain"})
  .end("http://localhost:3000/products or http://localhost:3000/users"));

app.listen(3000, () => console.log("Running on http://localhost:3000"));