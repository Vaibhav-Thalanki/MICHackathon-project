import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNumber } from "class-validator";

@Entity({ name: 'otp' })
export class OtpEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  otp: string

  @Column()
  phone: string
}