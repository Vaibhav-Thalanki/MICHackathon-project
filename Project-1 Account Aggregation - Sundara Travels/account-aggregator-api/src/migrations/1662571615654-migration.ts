import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1662571615654 implements MigrationInterface {
    name = 'migration1662571615654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Education Loans\` (\`id\` int NOT NULL AUTO_INCREMENT, \`bankId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`banks\` (\`id\` int NOT NULL AUTO_INCREMENT, \`bank_name\` varchar(255) NOT NULL, \`area\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Housing Loans\` (\`id\` int NOT NULL AUTO_INCREMENT, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`state\` varchar(255) NOT NULL, \`zip\` int NOT NULL, \`phone\` varchar(255) NOT NULL, \`annual_income\` int NOT NULL, \`coapplicant_annual_income\` int NOT NULL, \`loan_amount\` int NOT NULL, \`marital_status\` varchar(255) NOT NULL, \`no_of_dependents\` int NOT NULL, \`education_status\` varchar(255) NOT NULL, \`self_employment\` varchar(255) NOT NULL, \`loan_duration\` int NOT NULL, \`credit_history\` varchar(255) NOT NULL, \`identity_verified\` varchar(255) NOT NULL, \`identity_file\` longblob NOT NULL, \`property_area\` varchar(255) NOT NULL, \`bankId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD CONSTRAINT \`FK_6b185c42348994d0b7ec26a25b2\` FOREIGN KEY (\`bankId\`) REFERENCES \`banks\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` ADD CONSTRAINT \`FK_8746f2b1809a20a2a7b871f572a\` FOREIGN KEY (\`bankId\`) REFERENCES \`banks\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` DROP FOREIGN KEY \`FK_8746f2b1809a20a2a7b871f572a\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP FOREIGN KEY \`FK_6b185c42348994d0b7ec26a25b2\``);
        await queryRunner.query(`DROP TABLE \`Housing Loans\``);
        await queryRunner.query(`DROP TABLE \`banks\``);
        await queryRunner.query(`DROP TABLE \`Education Loans\``);
    }

}
