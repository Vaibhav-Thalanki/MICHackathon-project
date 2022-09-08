import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Retail Transactions" })
export class RetailTransactionsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  retail_date: string

  @Column()
  retail_amount: number
}