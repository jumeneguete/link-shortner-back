import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import User from "./User";

@Entity("links")
export default class Link extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originUrl: string;

  @Column()
  code: string;

  @Column()
  accessCounter: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.links)
  user: User;
}
