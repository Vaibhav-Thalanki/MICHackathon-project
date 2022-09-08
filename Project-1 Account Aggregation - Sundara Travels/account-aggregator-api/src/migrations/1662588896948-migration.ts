import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1662588896948 implements MigrationInterface {
    name = 'migration1662588896948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`income\` CHANGE \`expenses\` \`Expense\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`current_credit_balance\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`home_ownership\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` CHANGE \`int\` \`int\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`int\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`loan_purpose\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`monthly_debt\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`no_of_credit_problems\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`no_of_open_accounts\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`term\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`years_in_current_job\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`years_of_credit\``);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` DROP COLUMN \`date\``);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` CHANGE \`int\` \`int\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` DROP COLUMN \`int\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`identity_file\``);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` DROP COLUMN \`identity_file\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`ID\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`Current_Loan_Amount\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`Term\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`Years_in_current_job\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`Home_Ownership\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`Purpose\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`Monthly_Debt\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`Years_of_Credit_History\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`Number_of_Open_Accounts\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`Credit_Card_Balance\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`int\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`investments\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` ADD \`retail_date\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`trans_date\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`trans_date\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`TRANSACTION_DETAILS\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`TRANSACTION_DETAILS\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` CHANGE \`WITHDRAWAL_AMT\` \`WITHDRAWAL_AMT\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` CHANGE \`Deposit_amount\` \`Deposit_amount\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`investments\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`investments\` ADD \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`investments\` DROP COLUMN \`investments_assets\``);
        await queryRunner.query(`ALTER TABLE \`investments\` ADD \`investments_assets\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`investments\` DROP COLUMN \`tax_return\``);
        await queryRunner.query(`ALTER TABLE \`investments\` ADD \`tax_return\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`investments\` DROP COLUMN \`CreditScore\``);
        await queryRunner.query(`ALTER TABLE \`investments\` ADD \`CreditScore\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` DROP COLUMN \`retail_amount\``);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` ADD \`retail_amount\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` DROP COLUMN \`retail_amount\``);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` ADD \`retail_amount\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`investments\` DROP COLUMN \`CreditScore\``);
        await queryRunner.query(`ALTER TABLE \`investments\` ADD \`CreditScore\` double NULL`);
        await queryRunner.query(`ALTER TABLE \`investments\` DROP COLUMN \`tax_return\``);
        await queryRunner.query(`ALTER TABLE \`investments\` ADD \`tax_return\` double NULL`);
        await queryRunner.query(`ALTER TABLE \`investments\` DROP COLUMN \`investments_assets\``);
        await queryRunner.query(`ALTER TABLE \`investments\` ADD \`investments_assets\` double NULL`);
        await queryRunner.query(`ALTER TABLE \`investments\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`investments\` ADD \`phone\` varchar(10) NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` CHANGE \`Deposit_amount\` \`Deposit_amount\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` CHANGE \`WITHDRAWAL_AMT\` \`WITHDRAWAL_AMT\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`TRANSACTION_DETAILS\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`TRANSACTION_DETAILS\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`trans_date\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`trans_date\` varchar(15) NULL`);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` DROP COLUMN \`retail_date\``);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`investments\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`int\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`Credit_Card_Balance\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`Number_of_Open_Accounts\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`Years_of_Credit_History\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`Monthly_Debt\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`Purpose\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`Home_Ownership\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`Years_in_current_job\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`Term\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`Current_Loan_Amount\``);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` DROP COLUMN \`ID\``);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` ADD \`identity_file\` longblob NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`identity_file\` longblob NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` ADD \`int\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` ADD PRIMARY KEY (\`int\`)`);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` CHANGE \`int\` \`int\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`Retail Transactions\` ADD \`date\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`years_of_credit\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`years_in_current_job\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`term\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`no_of_open_accounts\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`no_of_credit_problems\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`monthly_debt\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`loan_purpose\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`int\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD PRIMARY KEY (\`int\`)`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` CHANGE \`int\` \`int\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`home_ownership\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Loan Status\` ADD \`current_credit_balance\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`income\` CHANGE \`Expense\` \`expenses\` int NOT NULL`);
    }

}
