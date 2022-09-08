import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BankEntity } from "./bank.entity";

@Entity({ name: "Education Loans" })
export class EducationLoanEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  address: string

  @Column()
  city: string

  @Column()
  state: string

  @Column()
  zip: number

  @Column()
  phone: string

  @Column()
  parents_annual_income: number

  @Column()
  loan_amount: number

  @Column()
  loan_duration: number

  @Column()
  cgpa: number

  @Column()
  bank_name: string

  @Column()
  predicted: string
}