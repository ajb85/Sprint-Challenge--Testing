const express = require("express");
const app = express();

const server = require("./server.js");

app.use(express.json());

app.use("/", server);
app.listen((port = process.env.PORT || 5000), () => {
  console.log(`\n Listening on port ${port}`);
});
