import faker from "faker";
import User from "../../entities/User";

export async function createUser() {
  const user = User.create({
    name: faker.name.findName(),
    image: faker.internet.avatar(),
    email: faker.internet.email(),
    password: "123456",
  });

  await user.save();
  return user;
}
