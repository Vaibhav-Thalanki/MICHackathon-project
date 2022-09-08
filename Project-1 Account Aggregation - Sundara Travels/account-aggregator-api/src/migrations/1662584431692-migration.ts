import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1662584431692 implements MigrationInterface {
    name = 'migration1662584431692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`income\` (\`int\` int NOT NULL AUTO_INCREMENT, \`month\` varchar(255) NOT NULL, \`income\` int NOT NULL, \`expenses\` int NOT NULL, PRIMARY KEY (\`int\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Education Loans\` ADD \`identity_file\` longblob NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Education Loans\` DROP COLUMN \`identity_file\``);
        await queryRunner.query(`DROP TABLE \`income\``);
    }

}
