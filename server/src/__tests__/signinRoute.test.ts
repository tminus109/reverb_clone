import supertest, { Test, SuperTest } from "supertest";
import app from "../app";

const testServer: SuperTest<Test> = supertest(app);

jest.mock("../services/shopService");
jest.mock("../services/userService");

describe("", () => {});
