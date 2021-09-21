import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
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

  static async findAll() {
    const result = this.find();
    return result;
  }
}
