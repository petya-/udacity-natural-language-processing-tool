var { isValidURL } = require("../client/js/urlChecker");

describe("Tests URL validator", () => {
  test("isValidURL returns false to invalid url", async () => {
    expect(isValidURL("test")).toBe(false);
  });
  test("isValidURL returns false to invalid url", async () => {
    expect(isValidURL("sometest")).toBe(false);
  });
  test("isValidURL returns true to valid url", async () => {
    expect(isValidURL("https://www.udacity.com")).toBe(true);
  });
});
