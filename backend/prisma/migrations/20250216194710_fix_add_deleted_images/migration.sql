/*
  Warnings:

  - The `deleted` column on the `images` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE `images` DROP COLUMN `deleted`,
    ADD COLUMN `deleted` BOOLEAN NULL;
