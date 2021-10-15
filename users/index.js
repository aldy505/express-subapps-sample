const express = require("express");
const dotenv = require("dotenv");
const { resolve, dirname } = require("path");

dotenv.config({ path: resolve(dirname(__filename), ".env") });

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

app.get("/password", (req, res) => res.status(200).json({password: process.env.PASSWORD}))

app.put("/", express.json(), (req, res) => {
  users.push(req.body);
  res.status(200).json({user: req.body})
})

app.delete("/name/:name", (req, res) => {
  users = users.filter(o => o.name !== req.params.name);
  res.status(200).json({msg: "That name was deleted"});
})

module.exports = app;
