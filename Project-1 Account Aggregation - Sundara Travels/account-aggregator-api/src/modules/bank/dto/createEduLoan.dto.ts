import { IsAlpha, IsMobilePhone, IsNotEmpty, IsNumber } from "class-validator"

export class CreateEduLoanDto {
  @IsNotEmpty()
  @IsAlpha()
  first_name: string

  @IsNotEmpty()
  @IsAlpha()
  last_name: string

  @IsNotEmpty()
  @IsAlpha()
  address: string

  @IsNotEmpty()
  @IsAlpha()
  city: string

  @IsNotEmpty()
  @IsAlpha()
  state: string

  @IsNotEmpty()
  @IsNumber()
  zip: number

  @IsNotEmpty()
  @IsMobilePhone()
  phone: string

  @IsNotEmpty()
  @IsNumber()
  parents_annual_income: number

  @IsNotEmpty()
  @IsNumber()
  loan_amount: number

  @IsNotEmpty()
  @IsNumber()
  loan_duration: number

  @IsNotEmpty()
  @IsNumber()
  cgpa: number

  @IsNotEmpty()
  @IsAlpha()
  bank_name: string
}