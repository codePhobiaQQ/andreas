import {MigrationInterface, QueryRunner} from "typeorm";

export class addVideoCategoryCorrect31630064190640 implements MigrationInterface {
    name = 'addVideoCategoryCorrect31630064190640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."video" DROP CONSTRAINT "FK_0c06b8d2494611b35c67296356c"`);
        await queryRunner.query(`ALTER TABLE "public"."video" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`CREATE TABLE "category_video_video" ("categoryId" integer NOT NULL, "videoId" integer NOT NULL, CONSTRAINT "PK_0a3732fa211d1c5530fbc8ed226" PRIMARY KEY ("categoryId", "videoId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_74f6b9eea1b5a8f2b8d4714eba" ON "category_video_video" ("categoryId") `);
        await queryRunner.query(`CREATE INDEX "IDX_be604f471528f22f93533164f4" ON "category_video_video" ("videoId") `);
        await queryRunner.query(`ALTER TABLE "public"."video" ADD CONSTRAINT "FK_74e27b13f8ac66f999400df12f6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category_video_video" ADD CONSTRAINT "FK_74f6b9eea1b5a8f2b8d4714eba2" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_video_video" ADD CONSTRAINT "FK_be604f471528f22f93533164f4a" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_video_video" DROP CONSTRAINT "FK_be604f471528f22f93533164f4a"`);
        await queryRunner.query(`ALTER TABLE "category_video_video" DROP CONSTRAINT "FK_74f6b9eea1b5a8f2b8d4714eba2"`);
        await queryRunner.query(`ALTER TABLE "public"."video" DROP CONSTRAINT "FK_74e27b13f8ac66f999400df12f6"`);
        await queryRunner.query(`DROP INDEX "IDX_be604f471528f22f93533164f4"`);
        await queryRunner.query(`DROP INDEX "IDX_74f6b9eea1b5a8f2b8d4714eba"`);
        await queryRunner.query(`DROP TABLE "category_video_video"`);
        await queryRunner.query(`ALTER TABLE "public"."video" RENAME COLUMN "userId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "public"."video" ADD CONSTRAINT "FK_0c06b8d2494611b35c67296356c" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
