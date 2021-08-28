import {MigrationInterface, QueryRunner} from "typeorm";

export class addVideoCategory1630063619462 implements MigrationInterface {
    name = 'addVideoCategory1630063619462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "videoId" integer, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."video" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_cddb4a0f0489e5d5cc13e34ee8b" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_cddb4a0f0489e5d5cc13e34ee8b"`);
        await queryRunner.query(`ALTER TABLE "public"."video" ADD "category" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
