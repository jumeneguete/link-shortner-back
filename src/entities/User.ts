import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import bcrypt from "bcrypt";
import EmailAlreadyRegistered from "../errors/EmailAlreadyRegistered";
import Link from "./Link";

@Entity("users")
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Link, (link) => link.user)
  links: Link[];

  static async createNew(
    name: string,
    image: string,
    email: string,
    password: string
  ) {
    await User.checkExistingEmail(email);

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = User.create({ name, image, email, password });
    await newUser.save();

    return newUser;
  }

  static async checkExistingEmail(email: string) {
    const user = await User.findOne({ email });
    if (user) {
      throw new EmailAlreadyRegistered(email);
    }
  }
}
