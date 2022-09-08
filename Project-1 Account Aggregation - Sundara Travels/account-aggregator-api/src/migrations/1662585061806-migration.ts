import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1662585061806 implements MigrationInterface {
    name = 'migration1662585061806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`date\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`transaction_details\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`withdrawal_amount\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`deposit_amount\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`DATE\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`TRANSACTION_DETAILS\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`WITHDRAWAL_AMT\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`Deposit_amount\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`Deposit_amount\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`WITHDRAWAL_AMT\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`TRANSACTION_DETAILS\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` DROP COLUMN \`DATE\``);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`deposit_amount\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`withdrawal_amount\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`transaction_details\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`deposits\` ADD \`date\` datetime NOT NULL`);
    }

}
