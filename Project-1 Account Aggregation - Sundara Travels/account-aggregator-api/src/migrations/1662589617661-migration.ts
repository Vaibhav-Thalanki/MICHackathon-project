import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1662589617661 implements MigrationInterface {
    name = 'migration1662589617661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`loanStatus\` ADD \`Number_of_Credit_Problems\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`loanStatus\` DROP COLUMN \`Number_of_Credit_Problems\``);
    }

}
