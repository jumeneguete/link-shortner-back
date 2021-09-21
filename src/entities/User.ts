import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  static async findAll() {

    const result = this.find();
    return result;
  }

}
