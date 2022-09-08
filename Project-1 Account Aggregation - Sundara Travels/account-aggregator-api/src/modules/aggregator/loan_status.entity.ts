import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "loanStatus" })
export class LoanStatusEntity {
  @PrimaryGeneratedColumn()
  ID: number

  @Column()
  phone: string

  @Column()
  Current_Loan_Amount: number

  @Column()
  Term: string

  @Column()
  Years_in_current_job: string

  @Column()
  Home_Ownership: string

  @Column()
  Purpose: string

  @Column()
  Monthly_Debt: number

  @Column()
  Years_of_Credit_History: string

  @Column()
  Number_of_Open_Accounts: number


  @Column()
  Number_of_Credit_Problems: number

  @Column()
  Credit_Card_Balance: number
}