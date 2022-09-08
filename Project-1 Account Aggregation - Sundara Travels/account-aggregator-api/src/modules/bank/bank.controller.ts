import { Controller } from "@nestjs/common";
import { Body, Post, UsePipes, Get, Query, UseInterceptors, UploadedFile } from "@nestjs/common/decorators";
import { ValidationPipe } from "@nestjs/common/pipes";
import { FileInterceptor } from "@nestjs/platform-express";
import { LoanInterface } from "types/loan.interface";
import { BankService } from "./bank.service";
import { BankAdminLoginDto } from "./dto/bankAdminLogin.dto";
import { CreateEduLoanDto } from "./dto/createEduLoan.dto";
import { CreateHomeLoanDto } from "./dto/createHomeLoan.dto";
import { OtpGenerateDto } from "./dto/otpGenerate.dto";
import { OtpVerifyDto } from "./dto/otpVerify.dto";
import { HousingLoanEntity } from "./homeloan.entity";
import { OtpEntity } from "./otp.entity";
import { apiPost, getToken } from "./components/trial";
// import getToken from "./components/trial";


@Controller()
export class BankController {
  constructor(private readonly bankService: BankService) { }

  @Post('api/otp')
  async generateOtp(@Body() otpGenerateDto: OtpGenerateDto): Promise<string> {
    return await this.bankService.generateOtp(otpGenerateDto)
  }

  @Post('api/otp/verify')
  async verifyOtp(@Body() otpVerifyDto: OtpVerifyDto): Promise<Boolean> {
    return await this.bankService.verifyOtp(otpVerifyDto)
  }

  @Post('api/bank/login')
  async loginAdmin(@Body() bankAdminLoginDto: BankAdminLoginDto): Promise<string> {
    return await this.bankService.adminLogin(bankAdminLoginDto)
  }

  @Get('api/loans')
  async getLoans(@Query() bank): Promise<LoanInterface[]> {
    return await this.bankService.getLoans(bank)
  }

  @Post('api/bank/homeloan')
  async createHomeLoan(@Body() createHomeLoanDto: CreateHomeLoanDto): Promise<any> {
    return await this.bankService.newHomeLoan(createHomeLoanDto)
  }

  @Post('api/bank/eduloan')
  async createEduLoan(@Body() createEduLoanDto: CreateEduLoanDto): Promise<any> {
    return await this.bankService.newEduLoan(createEduLoanDto)
  }

  @Get('api/')
  async test() {
    
  }
}