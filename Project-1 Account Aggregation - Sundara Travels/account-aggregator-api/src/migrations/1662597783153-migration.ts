import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1662597783153 implements MigrationInterface {
    name = 'migration1662597783153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`predicted\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` ADD \`predicted\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` DROP COLUMN \`predicted\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`predicted\``);
    }

}
