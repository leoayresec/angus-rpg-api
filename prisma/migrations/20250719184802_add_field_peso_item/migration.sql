/*
  Warnings:

  - Added the required column `peso` to the `tab_character_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tab_character_items" ADD COLUMN     "peso" DOUBLE PRECISION NOT NULL;
