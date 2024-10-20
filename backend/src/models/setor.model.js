import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class SetorModel {
    create = async (setor) => {
        try {
            return await prisma.setor.create({
                data: setor
            });
        } catch (error) {
            throw new Error('Erro ao criar setor');
        }
    }

    getAll = async () => {
        try {
            return await prisma.setor.findMany();
        } catch (error) {
            throw new Error('Erro ao buscar setores');
        }
    }

    getById = async (id) => {
        try {
            return await prisma.setor.findUnique({
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw new Error('Erro ao buscar setor');
        }
    }

    update = async (id, setor) => {
        try {
            return await prisma.setor.update({
                where: {
                    id: id
                },
                data: setor
            });
        } catch (error) {
            throw new Error('Erro ao atualizar setor');
        }
    }

    delete = async (id) => {
        try {
            return await prisma.setor.delete({
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw new Error('Erro ao deletar setor');
        }
    }

    filter = async (filter) => {
        try {
            return await prisma.setor.findMany({
                where: {
                    descricao: {
                        contains: filter
                    }
                }
            });
        } catch (error) {
            throw new Error('Erro ao filtrar setores');
        }
    }
}