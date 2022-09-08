import { IsAlpha, IsMobilePhone, IsNotEmpty, IsNumber } from "class-validator"

export class CreateHomeLoanDto {
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
  annual_income: number

  @IsNotEmpty()
  @IsNumber()
  coapplicant_annual_income: number

  @IsNotEmpty()
  @IsNumber()
  loan_amount: number

  @IsNotEmpty()
  @IsAlpha()
  marital_status: string

  @IsNotEmpty()
  @IsNumber()
  no_of_dependents: number

  @IsNotEmpty()
  @IsAlpha()
  education_status: string

  @IsNotEmpty()
  @IsAlpha()
  self_employment: string

  @IsNotEmpty()
  @IsNumber()
  loan_duration: number

  @IsNotEmpty()
  @IsAlpha()
  credit_history: string

  @IsNotEmpty()
  @IsAlpha()
  identity_verified: string

  @IsNotEmpty()
  @IsAlpha()
  property_area: string

  @IsNotEmpty()
  @IsAlpha()
  bank_name: string
}