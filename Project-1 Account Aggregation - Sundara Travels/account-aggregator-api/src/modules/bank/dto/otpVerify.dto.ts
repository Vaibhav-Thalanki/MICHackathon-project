import { IsNotEmpty, IsMobilePhone } from 'class-validator'

export class OtpVerifyDto {
  @IsNotEmpty()
  readonly otp: string

  @IsNotEmpty()
  @IsMobilePhone()
  readonly phone: string
}