import User from "../entities/User";
import { signUpBody } from "../interfaces/signUpBodyInterface";

export async function createNewUser(body: signUpBody) {
  const { name, image, email, password } = body;
  const user = await User.createNew(name, image, email, password);
  return user;
}
