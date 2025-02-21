/*
  Warnings:

  - You are about to drop the `Companies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `brands` DROP FOREIGN KEY `brands_company_id_fkey`;

-- DropIndex
DROP INDEX `brands_company_id_fkey` ON `brands`;

-- DropTable
DROP TABLE `Companies`;

-- CreateTable
CREATE TABLE `companies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `mail` TEXT NULL,
    `cnpj` VARCHAR(14) NULL,
    `key` INTEGER NOT NULL,
    `login` VARCHAR(150) NOT NULL,
    `pass` VARCHAR(200) NOT NULL,
    `api_key` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `brands` ADD CONSTRAINT `brands_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
