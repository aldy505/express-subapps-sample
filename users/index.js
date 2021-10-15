import express from "express";

const app = express();

const users = [
  {
    name: "Jason",
    age: 29,
  },
  {
    name: "Dicha",
    age: 17,
  }
]

app.get("/", (req, res) => res.status(200).json({users}))

app.put("/", express.json(), (req, res) => {
  users.push(req.body);
  res.status(200).json({user: req.body})
})

app.delete("/name/:name", (req, res) => {
  users = users.filter(o => o.name !== req.params.name);
  res.status(200).json({msg: "That name was deleted"});
})

export default app;
