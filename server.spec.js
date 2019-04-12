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

describe("/games get", () => {
  it("Should return status code 200 on a good request", async () => {
    const res = await request(server).get("/games");
    expect(res.status).toBe(200);
  });

  it("Should return json", async () => {
    const res = await request(server).get("/games");
    expect(res.type).toBe("application/json");
  });

  it("Should return an array of games", async () => {
    const res = await request(server).get("/games");
    console.log("Games: ", res.body.games);
    expect(Array.isArray(res.body.games)).toBe(true);
  });
});
