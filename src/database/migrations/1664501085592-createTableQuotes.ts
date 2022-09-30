import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableQuotes1664501085592 implements MigrationInterface {
    name = 'createTableQuotes1664501085592'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "quotes" ("quo_id" SERIAL NOT NULL, "quo_message" text NOT NULL, "quo_author" text NOT NULL, "quo_created_at" TIMESTAMP NOT NULL DEFAULT now(), "quo_updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "uq_quo" UNIQUE ("quo_message", "quo_author"), CONSTRAINT "pk_quo" PRIMARY KEY ("quo_id")); COMMENT ON COLUMN "quotes"."quo_id" IS 'Quotes Primary Key'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "quotes"`);
    }

}
