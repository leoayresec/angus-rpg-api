-- CreateTable
CREATE TABLE "tab_stereotype" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "conhecimento" INTEGER NOT NULL,
    "vigor" INTEGER NOT NULL,
    "habilidade" INTEGER NOT NULL,
    "magnetismo" INTEGER NOT NULL,
    "fe" INTEGER NOT NULL,
    "pericia_gratuita" TEXT NOT NULL,
    "restricao_pericia" TEXT,
    "bonus_pericia" INTEGER NOT NULL,
    "bonus_moedas" INTEGER NOT NULL,

    CONSTRAINT "tab_stereotype_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tab_stereotype_nome_key" ON "tab_stereotype"("nome");
