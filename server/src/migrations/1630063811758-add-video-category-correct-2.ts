import {MigrationInterface, QueryRunner} from "typeorm";

export class addVideoCategoryCorrect21630063811758 implements MigrationInterface {
    name = 'addVideoCategoryCorrect21630063811758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."category" DROP CONSTRAINT "FK_cddb4a0f0489e5d5cc13e34ee8b"`);
        await queryRunner.query(`ALTER TABLE "public"."category" DROP COLUMN "videoId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."category" ADD "videoId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."category" ADD CONSTRAINT "FK_cddb4a0f0489e5d5cc13e34ee8b" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
