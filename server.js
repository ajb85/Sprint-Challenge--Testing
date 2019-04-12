const express = require("express");

const server = express();

server.use(express.json());

server.post("/games", async ({ body: { title, genre, releaseYear } }, res) => {
  try {
    if (title && genre) {
      res.status(201).json({ message: "OK" });
    } else {
      res.status(422).json({ message: "Please supply title & genre" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
