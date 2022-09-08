import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DataInterface } from "types/data.interface";
import { DepositEntity } from "./deposits.entity";
import { IncomeEntity } from "./income.entity";
import { InvestmentEntity } from "./investments.entity";
import { LoanStatusEntity } from "./loan_status.entity";
import { RetailTransactionsEntity } from "./retail_transactions.entity";

@Injectable()
export class AggregatorService {
  constructor(@InjectRepository(DepositEntity) private readonly depositRepository: Repository<DepositEntity>, @InjectRepository(IncomeEntity) private readonly incomeRepository: Repository<IncomeEntity>, @InjectRepository(InvestmentEntity) private readonly investmentRepository: Repository<InvestmentEntity>, @InjectRepository(LoanStatusEntity) private readonly loanRepository: Repository<LoanStatusEntity>, @InjectRepository(RetailTransactionsEntity) private readonly retailRepository: Repository<RetailTransactionsEntity>) { }

  async getData(phone): Promise<DataInterface> {
    try {
      const deposits = await this.depositRepository.find()
      const income = await this.incomeRepository.find()
      const investments = await this.investmentRepository.findOne({
        where: {
          phone: phone.phone
        }
      })
      const loan_status = await this.loanRepository.findOne({
        where: {
          phone: phone.phone
        }
      })
      const retail_transactions = await this.retailRepository.find()
      const finalData: DataInterface = {
        deposits,
        income,
        investments,
        loan_status,
        retail_transactions
      }
      return finalData
    } catch (e) {
      throw e
    }
  }
}