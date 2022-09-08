import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BankAdminEntity } from "./bank_admin.entity";
import { EducationLoanEntity } from "./educationloan.entity";
import { HousingLoanEntity } from "./homeloan.entity";

@Entity({ name: 'banks' })
export class BankEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  bank_name: string

  @Column()
  area: string

  @OneToMany(() => BankAdminEntity, (admin) => admin.bank)
  admins: BankAdminEntity[]
}