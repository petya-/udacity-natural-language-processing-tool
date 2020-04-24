import { handleSubmit } from "../client/js/formHandler";

describe("Test that the handleSubmit function is defined", () => {
  test("Should return true", async () => {
    expect(handleSubmit).toBeDefined();
  });
});
