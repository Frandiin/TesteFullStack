/*
  Warnings:

  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Color` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sku` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Brand` DROP FOREIGN KEY `Brand_company_id_fkey`;

-- DropForeignKey
ALTER TABLE `Color` DROP FOREIGN KEY `Color_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `Sku` DROP FOREIGN KEY `Sku_product_id_fkey`;

-- DropTable
DROP TABLE `Brand`;

-- DropTable
DROP TABLE `Color`;

-- DropTable
DROP TABLE `Company`;

-- DropTable
DROP TABLE `Image`;

-- DropTable
DROP TABLE `Product`;

-- DropTable
DROP TABLE `Sku`;

-- CreateTable
CREATE TABLE `Products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `reference` VARCHAR(30) NOT NULL,
    `price` INTEGER NULL,
    `category` VARCHAR(50) NULL,
    `description` VARCHAR(8000) NULL,
    `brand` VARCHAR(100) NULL,
    `gender` VARCHAR(50) NULL,
    `stock` INTEGER NULL,
    `type` VARCHAR(255) NULL,
    `subcategory` VARCHAR(50) NULL,
    `prompt_delivey` BOOLEAN NOT NULL,
    `company_id` INTEGER NULL,
    `id_erp` VARCHAR(80) NULL,
    `brand_id` VARCHAR(100) NULL,
    `deadline_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted` BOOLEAN NULL,
    `variant_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Colors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `rgb` VARCHAR(11) NULL,
    `hex_code` VARCHAR(10) NULL,
    `product_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(255) NOT NULL,
    `order` TINYINT NOT NULL,
    `product_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `company_key` VARCHAR(4) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Brands` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,
    `company_id` INTEGER NOT NULL,
    `min_value` DOUBLE NULL,
    `min_installments_value` DOUBLE NULL,
    `order_skus` VARCHAR(100) NULL,
    `visible` BOOLEAN NULL,
    `deleted` BOOLEAN NULL,
    `cnpj` VARCHAR(14) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Companies` (
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

-- CreateTable
CREATE TABLE `Skus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `size` VARCHAR(10) NOT NULL,
    `stock` BIGINT NOT NULL,
    `product_id` INTEGER NOT NULL,
    `min_quantity` INTEGER NOT NULL,
    `deleted` BOOLEAN NULL,
    `open_grid` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `id_erp` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Colors` ADD CONSTRAINT `Colors_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Brands` ADD CONSTRAINT `Brands_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skus` ADD CONSTRAINT `Skus_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
