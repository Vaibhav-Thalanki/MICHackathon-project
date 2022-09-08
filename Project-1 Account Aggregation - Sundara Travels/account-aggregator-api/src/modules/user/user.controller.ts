import { Controller } from "@nestjs/common";
import { Body, Post, UsePipes } from "@nestjs/common/decorators";
import { ValidationPipe } from "@nestjs/common/pipes";
import { CreateUserDto } from "./dto/createUser.dto";
import { LoginUserDto } from "./dto/loginUser.dto";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('api/user')
  @UsePipes(new ValidationPipe())
  async createNewUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      return await this.userService.createNewUser(createUserDto)
    } catch (e) {
      throw e
    }
  }

  @Post('api/login')
  @UsePipes(new ValidationPipe())
  async loginUser(@Body() userLoginDto: LoginUserDto): Promise<string> {
    return this.userService.loginUser(userLoginDto)
  }
} 