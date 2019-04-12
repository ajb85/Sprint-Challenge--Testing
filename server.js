const server = require("express").Router();

const games = [
  { id: 1, title: "Pacman", genre: "Arcade", releaseYear: 1980 },
  { id: 2, title: "Warframe", genre: "Shooter", releaseYear: 2013 },
  { id: 3, title: "Path of Exile", genre: "Action RPG", releaseYear: 2013 }
];

const getID = (id => () => id++)(4);

server.post("/games", async ({ body }, res) => {
  const { title, genre } = body;
  try {
    if (body && body.title && body.genre) {
      const verifyUniqueTitle = _verifyUniqueTitle(title);
      if (verifyUniqueTitle) {
        const id = getID();
        games.push({ ...body, id });
        res.status(201).json({ id, ...body });
      } else {
        res.status(405).json({ message: "That entry already exists" });
      }
    } else {
      res.status(422).json({ message: "Please supply title & genre" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

server.get("/games", async (req, res) => {
  try {
    res.status(200).json({ games });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

function _verifyUniqueTitle(title) {
  return games.find(game => game.title.toLowerCase() === title.toLowerCase())
    ? false
    : true;
}

module.exports = server;
