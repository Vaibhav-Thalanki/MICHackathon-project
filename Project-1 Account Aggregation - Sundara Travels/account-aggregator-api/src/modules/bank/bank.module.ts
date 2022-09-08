import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "../user/user.module";
import { BankController } from "./bank.controller";
import { BankEntity } from "./bank.entity";
import { BankService } from "./bank.service";
import { BankAdminEntity } from "./bank_admin.entity";
import { EducationLoanEntity } from "./educationloan.entity";
import { HousingLoanEntity } from "./homeloan.entity";
import { OtpEntity } from "./otp.entity";

@Module({
  imports: [TypeOrmModule.forFeature([OtpEntity, HousingLoanEntity, EducationLoanEntity, BankEntity, BankAdminEntity]), UserModule],
  controllers: [BankController],
  exports: [BankService],
  providers: [BankService]
})
export class BankModule { }