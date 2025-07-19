/*
  Warnings:

  - You are about to drop the `tab_character_attributes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tab_character_finances` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tab_character_hierarchy` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `acao_extra` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conhecimento` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dano_adicional` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fe` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `folego` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `habilidade` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `magnetismo` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moedas_cobre` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moedas_ouro` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moedas_prata` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nivel_atual` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peso_maximo` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pontos_troca_atual` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pontos_troca_necessarios` to the `tab_character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vigor` to the `tab_character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tab_character_attributes" DROP CONSTRAINT "tab_character_attributes_characterId_fkey";

-- DropForeignKey
ALTER TABLE "tab_character_finances" DROP CONSTRAINT "tab_character_finances_characterId_fkey";

-- DropForeignKey
ALTER TABLE "tab_character_hierarchy" DROP CONSTRAINT "tab_character_hierarchy_characterId_fkey";

-- AlterTable
ALTER TABLE "tab_character" ADD COLUMN     "acao_extra" INTEGER NOT NULL,
ADD COLUMN     "conhecimento" INTEGER NOT NULL,
ADD COLUMN     "dano_adicional" INTEGER NOT NULL,
ADD COLUMN     "fe" INTEGER NOT NULL,
ADD COLUMN     "folego" INTEGER NOT NULL,
ADD COLUMN     "habilidade" INTEGER NOT NULL,
ADD COLUMN     "magnetismo" INTEGER NOT NULL,
ADD COLUMN     "moedas_cobre" INTEGER NOT NULL,
ADD COLUMN     "moedas_ouro" INTEGER NOT NULL,
ADD COLUMN     "moedas_prata" INTEGER NOT NULL,
ADD COLUMN     "nivel_atual" INTEGER NOT NULL,
ADD COLUMN     "peso_maximo" INTEGER NOT NULL,
ADD COLUMN     "pontos_troca_atual" INTEGER NOT NULL,
ADD COLUMN     "pontos_troca_necessarios" INTEGER NOT NULL,
ADD COLUMN     "vigor" INTEGER NOT NULL;

-- DropTable
DROP TABLE "tab_character_attributes";

-- DropTable
DROP TABLE "tab_character_finances";

-- DropTable
DROP TABLE "tab_character_hierarchy";

-- CreateTable
CREATE TABLE "tab_character_weapons" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "dano" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "desgaste" INTEGER NOT NULL,
    "bonus" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "tab_character_weapons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tab_character_armors" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "defesa" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "desgaste" INTEGER NOT NULL,
    "bonus" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "tab_character_armors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tab_character_items" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "tab_character_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tab_character_weapons" ADD CONSTRAINT "tab_character_weapons_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "tab_character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tab_character_armors" ADD CONSTRAINT "tab_character_armors_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "tab_character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tab_character_items" ADD CONSTRAINT "tab_character_items_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "tab_character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
