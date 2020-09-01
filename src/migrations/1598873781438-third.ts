import {MigrationInterface, QueryRunner} from "typeorm";

export class third1598873781438 implements MigrationInterface {
    name = 'third1598873781438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sazaesan" DROP CONSTRAINT "PK_66c3dd8ccb15195b5c5089f5ab4"`);
        await queryRunner.query(`ALTER TABLE "sazaesan" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "sazaesan" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sazaesan" ADD CONSTRAINT "PK_66c3dd8ccb15195b5c5089f5ab4" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sazaesan" DROP CONSTRAINT "PK_66c3dd8ccb15195b5c5089f5ab4"`);
        await queryRunner.query(`ALTER TABLE "sazaesan" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "sazaesan" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sazaesan" ADD CONSTRAINT "PK_66c3dd8ccb15195b5c5089f5ab4" PRIMARY KEY ("id")`);
    }

}
