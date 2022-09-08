import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "income" })
export class IncomeEntity {
  @PrimaryGeneratedColumn()
  int: number

  @Column()
  month: string

  @Column()
  income: number

  @Column()
  Expense: number
}