import express from "express";
import { randomString } from "./lib/random";

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello, world! ${randomString(10)}</h1>`);
});

app.listen(3000, () => {
  console.log("I got started!");
});