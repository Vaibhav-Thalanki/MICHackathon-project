import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/createUser.dto";
import { LoginUserDto } from "./dto/loginUser.dto";
import { UserEntity } from "./user.entity";
import { ConfigService } from "@nestjs/config";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>, private readonly configService: ConfigService) { }

  async createNewUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      const admin = new UserEntity()
      const isMobileExists = await this.userRepository.findOne({
        where: {
          phone: createUserDto.phone
        }
      })
      if (isMobileExists)
        throw new HttpException("User Already Exists", HttpStatus.BAD_REQUEST)
      Object.assign(admin, createUserDto)
      return await this.userRepository.save(admin)
    } catch (e) {
      throw e
    }
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<string> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email: loginUserDto.email
        }
      })

      if (!user)
        throw new HttpException("Invalid Credentials", HttpStatus.BAD_REQUEST)

      const isMatch = await bcrypt.compare(loginUserDto.password.trim(), user.password.trim())
      delete user.password

      if (isMatch) {
        return jwt.sign({
          email: loginUserDto.email,
          phone: user.phone,
          name: user.name
        }, this.configService.get<string>('JWT_SECRET'))
      } else {
        throw new HttpException("Invalid Credentials", HttpStatus.BAD_REQUEST)
      }
    } catch (e) {
      throw e
    }
  }

  async findUserByPhone(phone: string): Promise<UserEntity> {
    return await this.userRepository.findOne({
      where: {
        phone
      }
    })
  }
}