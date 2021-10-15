import polka from "polka";
import * as middleware from "../middleware/parser"

const app = polka();

let users = [
  {
    name: "Jason",
    age: 29,
  },
  {
    name: "Dicha",
    age: 17,
  }
]

app.get("/", (req, res) => res
  .writeHead(200, { "Content-Type": "application/json"})
  .end(JSON.stringify({users})))

app.put("/", middleware.parser, (req, res) => {
  users.push(req.body);
  res.writeHead(200, { "Content-Type": "application/json"}).end(JSON.stringify({user: req.body}))
})

app.delete("/name/:name", (req, res) => {
  users = users.filter(o => o.name !== req.params.name);
  res.writeHead(200, { "Content-Type": "application/json"}).end(JSON.stringify({msg: "that name was deleted"}))
})

export default app;
