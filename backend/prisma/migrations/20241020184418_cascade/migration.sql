-- DropForeignKey
ALTER TABLE "Empresa_Setor" DROP CONSTRAINT "Empresa_Setor_empresaId_fkey";

-- AddForeignKey
ALTER TABLE "Empresa_Setor" ADD CONSTRAINT "Empresa_Setor_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
