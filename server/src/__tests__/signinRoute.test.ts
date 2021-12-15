import supertest, { Test, SuperTest } from "supertest";
import app from "../app";

describe("signinRoute tests", () => {
  test("", () => {
    const api: SuperTest<Test> = supertest(app);
  });
});
