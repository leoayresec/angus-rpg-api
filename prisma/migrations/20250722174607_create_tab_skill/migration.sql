-- CreateTable
CREATE TABLE "tab_skill_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tab_skill_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tab_skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "describe" TEXT NOT NULL,
    "skillTypeId" INTEGER NOT NULL,

    CONSTRAINT "tab_skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tab_skill_type_name_key" ON "tab_skill_type"("name");

-- AddForeignKey
ALTER TABLE "tab_skill" ADD CONSTRAINT "tab_skill_skillTypeId_fkey" FOREIGN KEY ("skillTypeId") REFERENCES "tab_skill_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
