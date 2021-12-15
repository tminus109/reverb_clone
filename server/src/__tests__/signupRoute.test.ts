import supertest, { Test, SuperTest } from "supertest";
import app from "../app";

afterAll(() => {
  jest.clearAllMocks();
});

describe("Let's test Jest", () => {
  test("Expect 1 to equal 1", () => {
    expect(1).toEqual(1);
  });
});

describe("signupRoute tests", () => {
  test("Successful signup", async () => {
    const api: SuperTest<Test> = supertest(app);
  });
});
