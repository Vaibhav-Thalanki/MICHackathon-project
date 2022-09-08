import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1662579194001 implements MigrationInterface {
    name = 'migration1662579194001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Retail Transactions\` (\`int\` int NOT NULL AUTO_INCREMENT, \`date\` datetime NOT NULL, \`retail_amount\` varchar(255) NOT NULL, PRIMARY KEY (\`int\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Loan Status\` (\`int\` int NOT NULL AUTO_INCREMENT, \`phone\` varchar(255) NOT NULL, \`term\` varchar(255) NOT NULL, \`years_in_current_job\` varchar(255) NOT NULL, \`home_ownership\` varchar(255) NOT NULL, \`loan_purpose\` varchar(255) NOT NULL, \`monthly_debt\` int NOT NULL, \`years_of_credit\` int NOT NULL, \`no_of_open_accounts\` int NOT NULL, \`no_of_credit_problems\` int NOT NULL, \`current_credit_balance\` int NOT NULL, PRIMARY KEY (\`int\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`income\` (\`int\` int NOT NULL AUTO_INCREMENT, \`month\` varchar(255) NOT NULL, \`income\` int NOT NULL, \`expenses\` int NOT NULL, PRIMARY KEY (\`int\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`BankAdmin\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`bankId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`investments\` (\`int\` int NOT NULL AUTO_INCREMENT, \`phone\` varchar(255) NOT NULL, \`investment_assets\` int NOT NULL, \`tax_returns\` int NOT NULL, \`credit_score\` int NOT NULL, PRIMARY KEY (\`int\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`deposits\` (\`int\` int NOT NULL AUTO_INCREMENT, \`date\` datetime NOT NULL, \`transaction_details\` varchar(255) NOT NULL, \`withdrawal_amount\` int NOT NULL, \`deposit_amount\` int NOT NULL, PRIMARY KEY (\`int\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`first_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`last_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`city\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`state\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`zip\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`parents_annual_income\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`loan_amount\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`loan_duration\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`cgpa\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` ADD \`pending_status\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`BankAdmin\` ADD CONSTRAINT \`FK_58d2cde4ec922f32ed4f3d5917e\` FOREIGN KEY (\`bankId\`) REFERENCES \`banks\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`BankAdmin\` DROP FOREIGN KEY \`FK_58d2cde4ec922f32ed4f3d5917e\``);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` DROP COLUMN \`pending_status\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`cgpa\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`loan_duration\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`loan_amount\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`parents_annual_income\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`zip\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`state\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`city\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`last_name\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`first_name\``);
        await queryRunner.query(`DROP TABLE \`deposits\``);
        await queryRunner.query(`DROP TABLE \`investments\``);
        await queryRunner.query(`DROP TABLE \`BankAdmin\``);
        await queryRunner.query(`DROP TABLE \`income\``);
        await queryRunner.query(`DROP TABLE \`Loan Status\``);
        await queryRunner.query(`DROP TABLE \`Retail Transactions\``);
    }

}
