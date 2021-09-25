import supertest from "supertest";
import httpStatus from "http-status";
import faker from "faker";

import app, { init } from "../../app";
import { clearDatabase, endConnection } from "../utils/database";
import { createUser } from "../factories/userFactory";
import User from "../../entities/User";

const agent = supertest(app);

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
  function createUserData() {
    const userData = {
      name: faker.name.findName(),
      image: faker.internet.avatar(),
      email: faker.internet.email(),
      password: "123456",
    };
    return userData;
  }

  it("should create a new user", async () => {
    const userData = createUserData();

    const response = await agent.post("/sign-up").send(userData);

    expect(response.statusCode).toEqual(httpStatus.CREATED);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        image: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
      })
    );

    const userDatabase = await User.findOne({ email: userData.email });
    expect(userDatabase?.email).toEqual(userData.email);
  });

  it("should not allow creation of user with email that has been already used", async () => {
    const user = await createUser();
    const userData = createUserData();
    userData.email = user.email;

    const response = await agent.post("/sign-up").send(userData);

    expect(response.statusCode).toEqual(httpStatus.CONFLICT);

    const usersDatabase = await User.find({ email: userData.email });
    expect(usersDatabase.length).toEqual(1);
  });
});
