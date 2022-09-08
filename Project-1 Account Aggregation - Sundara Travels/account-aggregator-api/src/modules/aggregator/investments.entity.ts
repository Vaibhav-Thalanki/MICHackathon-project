import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "investments" })
export class InvestmentEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  phone: string

  @Column()
  investments_assets: number

  @Column()
  tax_return: number

  @Column()
  CreditScore: number
}