import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "deposits" })
export class DepositEntity {
  @PrimaryGeneratedColumn()
  int: number

  @Column()
  trans_date: string

  @Column()
  TRANSACTION_DETAILS: string

  @Column()
  WITHDRAWAL_AMT: number

  @Column()
  Deposit_amount: number
}