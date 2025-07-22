/*
  Warnings:

  - You are about to drop the column `skillTypeId` on the `tab_skill` table. All the data in the column will be lost.
  - Added the required column `skill_type_id` to the `tab_skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tab_skill" DROP CONSTRAINT "tab_skill_skillTypeId_fkey";

-- AlterTable
ALTER TABLE "tab_skill" DROP COLUMN "skillTypeId",
ADD COLUMN     "skill_type_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tab_skill" ADD CONSTRAINT "tab_skill_skill_type_id_fkey" FOREIGN KEY ("skill_type_id") REFERENCES "tab_skill_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
