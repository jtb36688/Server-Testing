const request = require("supertest");

const server = require("./server.js");

const db = require("../data/dbConfig.js");

describe("server.js", () => {
  it("should be associated with the testing object in knexfile", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
describe("POST /", () => {
  afterEach(async () => {
    await db("dogs").truncate();
  });
  it("should return a status code of 201 on POST", async () => {
    const res = await request(server)
      .post("/api")
      .send({ name: "Doggo", breed: "Border Collie" });
    expect(res.status).toBe(201);
  });
  it("should return JSON", async () => {
    const res = await request(server)
      .post("/api")
      .send({ name: "Doggo", breed: "Border Collie" });
    expect(res.type).toBe("application/json");
  });
});

describe("GET /", () => {
  it("should return a status code of 200 on GET", async () => {
    await request(server).get("/api");
    expect(200);
  });
  it("should return JSON", async () => {
    const res = await request(server).get("/api");
    expect(res.type).toBe("application/json");
  });
});

// describe("PUT /", () => {
//   beforeEach(async () => {
//     await db.migrate.rollback();
//     await db.migrate.latest();
//     db.seed.run()})
//   afterEach(async () => {
//     await db("dogs").truncate();
//   });
//   it("should return a status code of 200 on PUT to valid entry", async () => {
//     const res = await request(server)
//       .put("/api/1")
//       .send({ name: "Doggo", breed: "Border Collie" });
//     expect(res.status).toBe(201);
//   });
//   it("should return a status code of 404 on PUT to invalid entry", async () => {
//     const res = await request(server)
//       .put("/api/0")
//       .send({ name: "Doggo", breed: "Border Collie" });
//     expect(res.status).toBe(404);
//   });
//   it("should return JSON", async () => {
//     const res = await request(server)
//       .put("/api/")
//       .send({ name: "Doggo", breed: "Border Collie" });
//     expect(res.type).toBe("application/json");
//   });
// });

// describe('DELETE /', () => {
//     it('should return a status code of 204 on DELETE on valid entry', async () => {
//         const res = await request(server).delete('/api/1')
//         expect(res.status).toBe(204)
//     })
//     it('should return a status code of 404 on DELETE on invalid entry', async () => {
//         const res = await request(server).delete('/api/0')
//         expect(res.status).toBe(404)
//     })
// })
