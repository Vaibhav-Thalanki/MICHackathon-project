import { IsNotEmpty, IsEmail, IsMobilePhone, IsAlpha } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsAlpha()
  name: string

  @IsNotEmpty()
  @IsMobilePhone()
  phone: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string
}