import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hash } from "bcrypt"

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  password: string

  @Column()
  phone: string

  @Column()
  email: string

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10)
  }
}