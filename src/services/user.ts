import User from '../entities/User';
import { SignUpBody } from '../interfaces/signUpBodyInterface';

export async function createNewUser(body: SignUpBody) {
  const { name, image, email, password } = body;
  const user = await User.createNew(name, image, email, password);
  return user;
}
