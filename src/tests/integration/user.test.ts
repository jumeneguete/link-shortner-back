import supertest from "supertest";

import app, { init } from "../../app";
import { clearDatabase, endConnection } from "../utils/database";

const agent =  supertest(app);

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await clearDatabase();
  await endConnection();
});

describe("POST /users", () => {
  it("should create a new user", async () => {

  });

  it("should not allow creation of user with email that has been already used", async () => {

  });
});
