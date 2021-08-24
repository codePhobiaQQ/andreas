import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBlogs1629736054875 implements MigrationInterface {
    name = 'CreateBlogs1629736054875'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blog" ("id" SERIAL NOT NULL, "image" character varying NOT NULL DEFAULT '', "title" character varying NOT NULL DEFAULT '', "text" character varying NOT NULL DEFAULT '', "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_85c6532ad065a448e9de7638571" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog"`);
    }

}
