import { IsNotEmpty, IsMobilePhone, IsAlpha } from 'class-validator'

export class BankAdminLoginDto {
  @IsNotEmpty()
  @IsAlpha()
  readonly username: string

  @IsNotEmpty()
  readonly password: string
}