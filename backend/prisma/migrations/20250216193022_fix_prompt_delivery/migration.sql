/*
  Warnings:

  - You are about to drop the column `prompt_delivey` on the `Products` table. All the data in the column will be lost.
  - Added the required column `prompt_delivery` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Products` DROP COLUMN `prompt_delivey`,
    ADD COLUMN `prompt_delivery` BOOLEAN NOT NULL;
