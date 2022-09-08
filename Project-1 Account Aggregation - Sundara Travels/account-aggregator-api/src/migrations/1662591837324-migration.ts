import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1662591837324 implements MigrationInterface {
    name = 'migration1662591837324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP FOREIGN KEY \`FK_6b185c42348994d0b7ec26a25b2\``);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` DROP FOREIGN KEY \`FK_8746f2b1809a20a2a7b871f572a\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` CHANGE \`bankId\` \`bank_name\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` CHANGE \`bankId\` \`bank_name\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`bank_name\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`bank_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` DROP COLUMN \`bank_name\``);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` ADD \`bank_name\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` DROP COLUMN \`bank_name\``);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` ADD \`bank_name\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`bank_name\``);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`bank_name\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` CHANGE \`bank_name\` \`bankId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` CHANGE \`bank_name\` \`bankId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Housing Loans\` ADD CONSTRAINT \`FK_8746f2b1809a20a2a7b871f572a\` FOREIGN KEY (\`bankId\`) REFERENCES \`banks\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD CONSTRAINT \`FK_6b185c42348994d0b7ec26a25b2\` FOREIGN KEY (\`bankId\`) REFERENCES \`banks\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
