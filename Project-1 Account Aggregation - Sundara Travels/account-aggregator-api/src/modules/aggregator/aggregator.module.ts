import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AggregatorController } from "./aggregator.controller";
import { AggregatorService } from "./aggregator.service";
import { DepositEntity } from "./deposits.entity";
import { IncomeEntity } from "./income.entity";
import { InvestmentEntity } from "./investments.entity";
import { LoanStatusEntity } from "./loan_status.entity";
import { RetailTransactionsEntity } from "./retail_transactions.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DepositEntity, IncomeEntity, InvestmentEntity, LoanStatusEntity, RetailTransactionsEntity])],
  exports: [AggregatorService],
  controllers: [AggregatorController],
  providers: [AggregatorService]
})
export class AggregatorModule { }