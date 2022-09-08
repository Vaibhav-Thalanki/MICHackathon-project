import { DepositEntity } from "src/modules/aggregator/deposits.entity";
import { IncomeEntity } from "src/modules/aggregator/income.entity";
import { InvestmentEntity } from "src/modules/aggregator/investments.entity";
import { LoanStatusEntity } from "src/modules/aggregator/loan_status.entity";
import { RetailTransactionsEntity } from "src/modules/aggregator/retail_transactions.entity";

export interface DataInterface {
  deposits: DepositEntity[],
  income: IncomeEntity[],
  investments: InvestmentEntity,
  loan_status: LoanStatusEntity,
  retail_transactions: RetailTransactionsEntity[]
}