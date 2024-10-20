import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class SetorModel {
    create = async (setor) => {
        return await prisma.setor.create({
            data: setor
        });
    }

    getAll = async () => {
        return await prisma.setor.findMany();
    }

    getById = async (id) => {
        const setor = await prisma.setor.findUnique({
            where: {
                id: id
            }
        });

        if (!setor) {
            throw new Error('Setor não encontrado');
        }

        return setor;
    }

    update = async (id, setor) => {
        const setordb = await this.verifySetor(id);
        
        if (!setordb) {
            throw new Error('Setor não encontrado');
        }

        return await prisma.setor.update({
            where: {
                id: id
            },
            data: setor
        });
    }

    delete = async (id) => {
        const setor = await this.verifySetor(id);
        
        if (!setor) {
            throw new Error('Setor não encontrado');
        }

        return await prisma.setor.delete({
            where: {
                id: id
            }
        });
    }

    verifySetor = async (id) => {
        return await prisma.setor.findUnique({
            where: {
                id: id
            }
        });
    }
}