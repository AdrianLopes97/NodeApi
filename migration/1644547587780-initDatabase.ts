import {MigrationInterface, QueryRunner} from "typeorm";

export class initDatabase1644547587780 implements MigrationInterface {
    name = 'initDatabase1644547587780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "car" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "carname" character varying NOT NULL, "model" character varying NOT NULL, "modelYear" TIMESTAMP NOT NULL DEFAULT now(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), "licensePlate" character varying NOT NULL, CONSTRAINT "UQ_376f481e04705afcf4a2bc0aa9b" UNIQUE ("licensePlate"), CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "birthdate" TIMESTAMP NOT NULL DEFAULT now(), "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), "cpf" character varying(11) NOT NULL, "rg" character varying(9) NOT NULL, "telefone" character varying NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_a6235b5ef0939d8deaad755fc87" UNIQUE ("cpf"), CONSTRAINT "UQ_ce0d72875e07836ac661c7c37d5" UNIQUE ("rg"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "car"`);
    }

}
