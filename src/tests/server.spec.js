const app = require("../server/server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

describe("Test API endpoints", () => {
  test("GET / -> Successfuly render index.html", async () => {
    const response = await request.get("/").expect(200);
  });

  test("POST /analyze -> Make request to Aylien", async () => {
    const response = await request
      .post("/analyze")
      .send({ text: "https://www.udacity.com/" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("POST /analyze -> Return Invalid input", async () => {
    const response = await request
      .post("/analyze")
      .send({ url: "https://www.udacity.com/" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body.message).toBe("Invalid input");
  });
});
