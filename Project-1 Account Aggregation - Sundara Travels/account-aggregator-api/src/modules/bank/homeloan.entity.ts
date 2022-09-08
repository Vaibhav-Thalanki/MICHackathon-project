import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BankEntity } from "./bank.entity";

@Entity({ name: "Housing Loans" })
export class HousingLoanEntity {
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
  annual_income: number

  @Column()
  coapplicant_annual_income: number

  @Column()
  loan_amount: number

  @Column()
  marital_status: string

  @Column()
  no_of_dependents: number

  @Column()
  education_status: string

  @Column()
  self_employment: string

  @Column()
  loan_duration: number

  @Column()
  credit_history: string

  @Column()
  identity_verified: string

  @Column()
  property_area: string

  @Column()
  pending_status: boolean

  @Column()
  bank_name: string

  @Column()
  predicted: string
}
