import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class EmpresaModel {
    create = async (empresa) => {
        return await prisma.empresa.create({
            data: empresa
        });
    }

    getAll = async () => {
        return await prisma.empresa.findMany();
    }

    getById = async (id) => {
        const empresa = await prisma.empresa.findUnique({
            where: {
                id: id
            }
        });

        if (!empresa) {
            throw new Error('Empresa não encontrada');
        }

        return empresa;
    }

    update = async (id, empresa) => {
        const empresadb = await this.verifyEmpresa(id);
        
        if (!empresadb) {
            throw new Error('Empresa não encontrada');
        }

        return await prisma.empresa.update({
            where: {
                id: id
            },
            data: empresa
        });
    }

    delete = async (id) => {
        const empresa = await this.verifyEmpresa(id);
        
        if (!empresa) {
            throw new Error('Empresa não encontrada');
        }

        return await prisma.empresa.delete({
            where: {
                id: id
            }
        });
    }

    verifyEmpresa = async (id) => {
        return await prisma.empresa.findUnique({
            where: {
                id: id
            }
        });
    }
}