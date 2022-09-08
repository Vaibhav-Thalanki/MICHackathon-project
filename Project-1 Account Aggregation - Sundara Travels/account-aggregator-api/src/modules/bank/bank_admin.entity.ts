import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BankEntity } from "./bank.entity";

@Entity({ name: 'BankAdmin' })
export class BankAdminEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @ManyToOne(() => BankEntity, (bank) => bank.admins)
  bank: BankEntity
}