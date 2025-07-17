-- CreateTable
CREATE TABLE "tab_user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "tab_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tab_character" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "jogador" TEXT NOT NULL,
    "esteriotipo" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "descendencia" TEXT NOT NULL,
    "altura" INTEGER NOT NULL,
    "sexo" TEXT NOT NULL,
    "peso" INTEGER NOT NULL,
    "cabelos" TEXT NOT NULL,
    "olhos" TEXT NOT NULL,
    "aparencia_geral" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "tab_character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tab_character_attributes" (
    "id" SERIAL NOT NULL,
    "conhecimento" INTEGER NOT NULL,
    "habilidade" INTEGER NOT NULL,
    "vigor" INTEGER NOT NULL,
    "peso_maximo" INTEGER NOT NULL,
    "dano_adicional" INTEGER NOT NULL,
    "folego" INTEGER NOT NULL,
    "fe" INTEGER NOT NULL,
    "magnetismo" INTEGER NOT NULL,
    "acao_extra" TEXT NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "tab_character_attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tab_character_hierarchy" (
    "id" SERIAL NOT NULL,
    "nivel_atual" INTEGER NOT NULL,
    "pontos_troca_atual" INTEGER NOT NULL,
    "pontos_troca_necessarios" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "tab_character_hierarchy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tab_character_finances" (
    "id" SERIAL NOT NULL,
    "moedas_ouro" INTEGER NOT NULL,
    "moedas_prata" INTEGER NOT NULL,
    "moedas_cobre" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "tab_character_finances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tab_character_skills" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nivel_especializacao" INTEGER NOT NULL,
    "valor_teste" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "tab_character_skills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tab_user_email_key" ON "tab_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tab_character_attributes_characterId_key" ON "tab_character_attributes"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "tab_character_hierarchy_characterId_key" ON "tab_character_hierarchy"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "tab_character_finances_characterId_key" ON "tab_character_finances"("characterId");

-- AddForeignKey
ALTER TABLE "tab_character" ADD CONSTRAINT "tab_character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tab_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tab_character_attributes" ADD CONSTRAINT "tab_character_attributes_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "tab_character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tab_character_hierarchy" ADD CONSTRAINT "tab_character_hierarchy_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "tab_character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tab_character_finances" ADD CONSTRAINT "tab_character_finances_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "tab_character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tab_character_skills" ADD CONSTRAINT "tab_character_skills_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "tab_character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
