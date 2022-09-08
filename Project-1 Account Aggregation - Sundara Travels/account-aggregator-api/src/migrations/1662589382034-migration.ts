import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1662589382034 implements MigrationInterface {
    name = 'migration1662589382034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Current_Credit_Balance\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Number_of_Credit_Problems\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Credit_Card_Balance\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`ID\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`ID\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` CHANGE \`Current_Loan_Amount\` \`Current_Loan_Amount\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Term\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Term\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Years_in_current_job\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Years_in_current_job\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Home_Ownership\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Home_Ownership\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Purpose\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Purpose\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` CHANGE \`Monthly_Debt\` \`Monthly_Debt\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Years_of_Credit_History\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Years_of_Credit_History\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` CHANGE \`Number_of_Open_Accounts\` \`Number_of_Open_Accounts\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`loanStatus\` CHANGE \`Number_of_Open_Accounts\` \`Number_of_Open_Accounts\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Years_of_Credit_History\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Years_of_Credit_History\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` CHANGE \`Monthly_Debt\` \`Monthly_Debt\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Purpose\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Purpose\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Home_Ownership\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Home_Ownership\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Years_in_current_job\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Years_in_current_job\` varchar(10) NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Term\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Term\` varchar(10) NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` CHANGE \`Current_Loan_Amount\` \`Current_Loan_Amount\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`phone\` varchar(10) NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`ID\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`ID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Credit_Card_Balance\``);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Number_of_Credit_Problems\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Current_Credit_Balance\` int NULL`);
    }

}
