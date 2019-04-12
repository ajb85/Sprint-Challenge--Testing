const request = require("supertest");
const server = require("./server.js");

describe("/games posts", () => {
  const goodData = {
    title: "Pacman",
    genre: "Arcade",
    releaseYear: 1980
  };

  it("should return 201 for valid requests", async () => {
    const res = await request(server)
      .post("/games")
      .send(goodData);
    expect(res.status).toBe(201);
  });

  it("should return json", async () => {
    const res = await request(server)
      .post("/games")
      .send(goodData);
    expect(res.type).toBe("application/json");
  });

  it("should return 422 for valid requests", async () => {
    const badData = { title: "Pacman" };
    const res = await request(server)
      .post("/games")
      .send(badData);
    expect(res.status).toBe(422);
  });
});
