import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { OtpVerifyDto } from "./dto/otpVerify.dto";
import { OtpGenerateDto } from "./dto/otpGenerate.dto";
import { UserService } from "../user/user.service";
import { OtpEntity } from "./otp.entity";
import messageSender from "./components/messageSender";
import appDataSource from "src/datasource";
import { BankAdminEntity } from "./bank_admin.entity";
import { BankAdminLoginDto } from "./dto/bankAdminLogin.dto";
const otpGenerator = require('otp-generator')
// import bcrypt from 'bcryptjs';
import { LoanInterface } from "types/loan.interface";
import { HousingLoanEntity } from "./homeloan.entity";
import { EducationLoanEntity } from "./educationloan.entity";
import { BankEntity } from "./bank.entity";
import { CreateHomeLoanDto } from "./dto/createHomeLoan.dto";
import { CreateEduLoanDto } from "./dto/createEduLoan.dto";
import { apiPost, getToken } from "./components/trial";
// import apiPost from './components/trial'
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

@Injectable()
export class BankService {
  constructor(@InjectRepository(OtpEntity) private readonly otpRepository: Repository<OtpEntity>, @InjectRepository(BankEntity) private readonly bankRepository: Repository<BankEntity>, @InjectRepository(BankAdminEntity) private readonly adminRepository: Repository<BankAdminEntity>, @InjectRepository(HousingLoanEntity) private readonly houseLoanRepository: Repository<HousingLoanEntity>, @InjectRepository(EducationLoanEntity) private readonly educationLoanRepository: Repository<EducationLoanEntity>, private readonly userService: UserService, private readonly configService: ConfigService) { }

  async generateOtp(otpGenerateDto: OtpGenerateDto): Promise<string> {
    const phone = otpGenerateDto.phone
    try {
      if (this.userService.findUserByPhone(phone)) {
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: true, specialChars: false })
        const otpEntity = new OtpEntity()
        otpEntity.otp = otp
        otpEntity.phone = otpGenerateDto.phone
        if (await this.otpRepository.save(otpEntity)) {
          const res = await messageSender(otpEntity)
          return `OTP sent to ${phone}`
        }
        else
          return 'OTP not sent. Retry!'
      }
    } catch (e) {
      throw e
    }
  }

  async verifyOtp(otpVerifyDto: OtpVerifyDto): Promise<any> {
    try {
      const validOtp = await this.otpRepository.findOne({
        where: {
          phone: otpVerifyDto.phone,
          otp: otpVerifyDto.otp
        }
      })

      if (validOtp) {
        await this.otpRepository.delete(validOtp)
        return otpVerifyDto.phone
      }
      else
        throw new HttpException('Invalid OTP', HttpStatus.BAD_REQUEST)
    } catch (e) {
      throw e
    }
  }

  async adminLogin(bankLoginAdminDto: BankAdminLoginDto): Promise<any> {
    try {
      const admin = await this.adminRepository.findOne({
        where: {
          username: bankLoginAdminDto.username
        }, relations: {
          bank: true
        }
      })

      if (!admin)
        throw new HttpException("Invalid Credentials", HttpStatus.BAD_REQUEST)

      const isMatch = await bcrypt.compare(bankLoginAdminDto.password.trim(), admin.password.trim())
      delete admin.password

      if (isMatch) {
        console.log(admin)
        return admin.bank.bank_name
      } else {
        throw new HttpException("Invalid Credentials", HttpStatus.BAD_REQUEST)
      }
    } catch (e) {
      throw e
    }
  }

  async getLoans(bank_name): Promise<LoanInterface[]> {
    try {
      const home_loans = await this.houseLoanRepository.find({
        where: {
          bank_name: bank_name.bank
        }
      })
      const edu_loans = await this.educationLoanRepository.find({
        where: {
          bank_name: bank_name.bank
        }
      })
      console.log(edu_loans)
      const loans: LoanInterface[] = []
      for (let i = 0; i < home_loans.length; i++) {
        let loan: LoanInterface = {
          'type': "Home Loan",
          'name': home_loans[i].first_name + " " + home_loans[i].last_name,
          'amount': home_loans[i].loan_amount,
          'duration': home_loans[i].loan_duration
        }
        loans.push(loan)
      }
      for (let i = 0; i < edu_loans.length; i++) {
        let loan: LoanInterface = {
          'type': "Education Loan",
          'name': edu_loans[i].first_name + " " + edu_loans[i].last_name,
          'amount': edu_loans[i].loan_amount,
          'duration': edu_loans[i].loan_duration
        }
        loans.push(loan)
      }
      return loans
    } catch (e) {
      throw e
    }
  }

  async newHomeLoan(createHomeLoanDto: CreateHomeLoanDto) {
    const newHomeLoan = new HousingLoanEntity()
    Object.assign(newHomeLoan, createHomeLoanDto)
    const education = newHomeLoan["education_status"]
    const ApplicantIncome = newHomeLoan["annual_income"]
    const Coapplicant = newHomeLoan["coapplicant_annual_income"]
    const LoanAmount = newHomeLoan["loan_amount"]
    const LoanTerm = newHomeLoan["loan_duration"]
    const CreditHistory = newHomeLoan["credit_history"]
    const dependents = newHomeLoan["no_of_dependents"]
    const property = newHomeLoan["property_area"]
    let se, s1, s2, s3, s4, sp1, sp2, sp3;
    if (education === "Graduate") {
      se = 0;
    } else {
      se = 1;
    }
    if (dependents == 0) {
      s1 = 0;
      s2 = 0;
      s3 = 0;
      s4 = 1;
    } else if (dependents == 1) {
      s1 = 0;
      s2 = 0;
      s3 = 1;
      s4 = 0;
    } else if (dependents == 2) {
      s1 = 0;
      s2 = 1;
      s3 = 0;
      s4 = 0;
    } else {
      s1 = 1;
      s2 = 0;
      s3 = 0;
      s4 = 0;
    }
    if (property === "Rural") {
      sp1 = 0;
      sp2 = 0;
      sp3 = 1;
    } else if (property === "Semi-urban") {
      sp1 = 0;
      sp2 = 1;
      sp3 = 0;
    } else {
      sp1 = 1;
      sp2 = 0;
      sp3 = 0;
    }
    const payload = `{"input_data": [{"values": [[${se},${ApplicantIncome},${Coapplicant},${LoanAmount},${LoanTerm},${CreditHistory},${s1},${s2},${s3},${s4},${sp1},${sp2},${sp3}]]}]}`

    newHomeLoan.predicted = await this.homePredict(payload)
    try {
      return await this.houseLoanRepository.save(newHomeLoan)
    } catch (e) {
      throw e
    }
  }

  async newEduLoan(createEduLoanDto: CreateEduLoanDto) {
    const newEduLoan = new EducationLoanEntity()
    Object.assign(newEduLoan, createEduLoanDto)
    const education = 0
    const parentIncome = newEduLoan["parents_annual_income"]
    const LoanAmount = newEduLoan["loan_amount"]
    const LoanTerm = newEduLoan["loan_duration"]
    const cgpa = newEduLoan["cgpa"]
    let cp1, cp2, cp3;
    if (cgpa >= 8) {
      cp3 = 1
      cp2 = 0
      cp1 = 0
    } else if (cgpa >= 5 && cgpa < 8) {
      cp3 = 0
      cp2 = 0
      cp1 = 1
    } else {
      cp3 = 0
      cp2 = 1
      cp1 = 0
    }

    const payload = `{"input_data": [{"values": [[${education},${parentIncome},${LoanAmount},${LoanTerm},${cp1},${cp2},${cp3}]]}]}`

    newEduLoan.predicted = await this.educationPredict(payload)

    try {
      return await this.educationLoanRepository.save(newEduLoan)
    } catch (e) {
      throw e
    }
  }

  async homePredict(payload): Promise<string> {
    let predicted = "1"
    getToken(
      (err) => console.log(err),
      function () {
        let tokenResponse;
        try {
          tokenResponse = JSON.parse(this.responseText);
        } catch (ex) {
          // TODO: handle parsing exception
        }
        // NOTE: manually define and pass the array(s) of values to be scored in the next line
        //[0,5000,129,360,1.0,0.0,0.0]
        // const payload = `{"input_data": [{"values": [[0,5000,129,360,1.0,0.0,0.0]]}]}`;
        const scoring_url =
          "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/9fccb5b7-a803-4198-9c89-81a9802c5e07/predictions?version=2022-09-07";
        //education  -  https://us-south.ml.cloud.ibm.com/ml/v4/deployments/94c8e1c6-3e0e-4bf0-ae77-2db69fc96a29/predictions?version=2022-09-07
        // education ex - const payload = `{"input_data": [{"values": [[0,6000,128,360,0.0,1.0,0.0]]}]}`;
        //home  -  https://us-south.ml.cloud.ibm.com/ml/v4/deployments/9fccb5b7-a803-4198-9c89-81a9802c5e07/predictions?version=2022-09-07
        // home ex - const payload = `{"input_data": [{"values": [[0,342,434,321,143,0,1,0,0,0,1,0,0]]}]}`;
        apiPost(
          scoring_url,
          tokenResponse.access_token,
          payload,
          function (resp) {
            let parsedPostResponse;
            try {
              parsedPostResponse = JSON.parse(this.responseText);
            } catch (ex) {
              // TODO: handle parsing exception
            }
            // console.log(parsedPostResponse);
            predicted = parsedPostResponse["predictions"][0]["values"][0][0]
          },
          function (error) {
            console.log(error);
          }
        );
      }
    );
    return predicted
  }

  async educationPredict(payload) {
    let predicted = "1"
    getToken(
      (err) => console.log(err),
      function () {
        let tokenResponse;
        try {
          tokenResponse = JSON.parse(this.responseText);
        } catch (ex) {
          // TODO: handle parsing exception
        }
        // NOTE: manually define and pass the array(s) of values to be scored in the next line
        //[0,5000,129,360,1.0,0.0,0.0]
        // const payload = `{"input_data": [{"values": [[0,5000,129,360,1.0,0.0,0.0]]}]}`;
        const scoring_url =
          "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/94c8e1c6-3e0e-4bf0-ae77-2db69fc96a29/predictions?version=2022-09-07";
        //education  -  https://us-south.ml.cloud.ibm.com/ml/v4/deployments/94c8e1c6-3e0e-4bf0-ae77-2db69fc96a29/predictions?version=2022-09-07
        // education ex - const payload = `{"input_data": [{"values": [[0,6000,128,360,0.0,1.0,0.0]]}]}`;
        // "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/9fccb5b7-a803-4198-9c89-81a9802c5e07/predictions?version=2022-09-07"
        // home ex - const payload = `{"input_data": [{"values": [[0,342,434,321,143,0,1,0,0,0,1,0,0]]}]}`;
        apiPost(
          scoring_url,
          tokenResponse.access_token,
          payload,
          function (resp) {
            let parsedPostResponse;
            try {
              parsedPostResponse = JSON.parse(this.responseText);
            } catch (ex) {
              // TODO: handle parsing exception
            }
            predicted = parsedPostResponse["predictions"][0]["values"][0][0];
          },
          function (error) {
            console.log(error);
          }
        );
      }
    );
    return predicted
  }
}