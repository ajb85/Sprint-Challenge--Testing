const express = require("express");

const server = express();

server.use(express.json());

const games = [
  { title: "Pacman", genre: "Arcade", releaseYear: 1980 },
  { title: "Warframe", genre: "Shooter", releaseYear: 2013 },
  { title: "Path of Exile", genre: "Action RPG", releaseYear: 2013 }
];

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

module.exports = server;
