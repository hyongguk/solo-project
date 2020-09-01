import {MigrationInterface, QueryRunner} from "typeorm";

export class second1598872075830 implements MigrationInterface {
    name = 'second1598872075830'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sazaesan" ("id" uuid NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, CONSTRAINT "PK_66c3dd8ccb15195b5c5089f5ab4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sazaesan"`);
    }

}
