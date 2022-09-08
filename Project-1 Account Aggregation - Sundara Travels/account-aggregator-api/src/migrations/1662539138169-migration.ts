import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1662539138169 implements MigrationInterface {
    name = 'migration1662539138169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user_entity\``);
    }

}
