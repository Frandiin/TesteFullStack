/*
  Warnings:

  - You are about to drop the `Brands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Colors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Brands` DROP FOREIGN KEY `Brands_company_id_fkey`;

-- DropForeignKey
ALTER TABLE `Colors` DROP FOREIGN KEY `Colors_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `Images` DROP FOREIGN KEY `Images_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `Skus` DROP FOREIGN KEY `Skus_product_id_fkey`;

-- DropTable
DROP TABLE `Brands`;

-- DropTable
DROP TABLE `Colors`;

-- DropTable
DROP TABLE `Images`;

-- DropTable
DROP TABLE `Products`;

-- DropTable
DROP TABLE `Skus`;

-- CreateTable
CREATE TABLE `products` (
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
    `prompt_delivery` BOOLEAN NOT NULL,
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
CREATE TABLE `colors` (
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
CREATE TABLE `images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(255) NOT NULL,
    `order` TINYINT NOT NULL,
    `product_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NULL,
    `company_key` VARCHAR(4) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `brands` (
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
CREATE TABLE `skus` (
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
ALTER TABLE `colors` ADD CONSTRAINT `colors_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `brands` ADD CONSTRAINT `brands_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `skus` ADD CONSTRAINT `skus_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
