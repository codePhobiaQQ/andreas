import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRealationsBetweenBlogAndUser1629736765533 implements MigrationInterface {
    name = 'AddRealationsBetweenBlogAndUser1629736765533'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."blog" ADD "authorId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."blog" ADD CONSTRAINT "FK_a001483d5ba65dad16557cd6ddb" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."blog" DROP CONSTRAINT "FK_a001483d5ba65dad16557cd6ddb"`);
        await queryRunner.query(`ALTER TABLE "public"."blog" DROP COLUMN "authorId"`);
    }

}
