import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1662554380901 implements MigrationInterface {
    name = 'migration1662554380901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`otp\` (\`id\` int NOT NULL AUTO_INCREMENT, \`otp\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`otp\``);
    }

}
