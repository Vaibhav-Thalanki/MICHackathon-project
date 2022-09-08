import { IsNotEmpty, IsMobilePhone } from 'class-validator'

export class OtpGenerateDto {
  @IsNotEmpty()
  @IsMobilePhone()
  readonly phone: string
}