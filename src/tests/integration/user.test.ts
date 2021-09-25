import supertest from 'supertest'
import httpStatus from "http-status";
import faker from "faker";

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

describe("POST /sign-up", () => {
  it("should create a new user", async () => {
    const userData = {
      name: faker.name.findName(),
      image: faker.internet.avatar(),
      email: faker.internet.email(),
      password: "123456"
    };

    const response = await agent.post("/sign-up").send(userData);

    expect(response.statusCode).toEqual(httpStatus.CREATED);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        image: expect.any(String),
        email: expect.any(String),
        password: expect.any(String)
      })
    );
  });

  // it("should not allow creation of user with email that has been already used", async () => {
  
  // });
});
