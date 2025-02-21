/*
  Warnings:

  - You are about to drop the column `deleted_at` on the `images` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `images` DROP COLUMN `deleted_at`,
    ADD COLUMN `deleted` DATETIME(3) NULL;
