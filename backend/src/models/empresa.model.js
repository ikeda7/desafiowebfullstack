import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class EmpresaModel {
    create = async (empresa) => {
        try {
            const { razao_social, nome_fantasia, cnpj, setores } = empresa;
            
            return await prisma.empresa.create({
                data: {
                    razao_social: razao_social,
                    nome_fantasia: nome_fantasia,
                    cnpj: cnpj,
                    empresa_setor: {
                        create: setores.map((setorId) => ({
                          setor: { connect: { id: setorId } },
                        })),
                    },
                }
            });
        } catch (error) {
            console.log(error)
            throw new Error('Erro ao criar empresa');
        }
    }


    getAll = async () => {
        try {
            return await prisma.empresa.findMany({ include: { empresa_setor: { include: { setor:true } }}});
        }catch (error) {
            throw new Error('Erro ao buscar empresas');
        }
    }

    getById = async (id) => {
        
        try {
            return await prisma.empresa.findUnique({
                include: { empresa_setor: { include: { setor:true } }},
    
                where: {
                    id: id
                }
            });
        } catch (error) { 
            throw new Error('Erro ao buscar empresa');
        }
    }

    update = async (id, empresa) => {    
        try {
            const { razao_social, nome_fantasia, cnpj, setoresConectar, setoresDesconectar } = empresa;

            return await prisma.empresa.update({
                where: {
                    id: id
                },
                data: {
                    razao_social: razao_social,
                    nome_fantasia: nome_fantasia,
                    cnpj: cnpj,
                    empresa_setor: {
                        connect: setoresConectar.map((setorId) => ({
                          id: setorId
                        })),
                        disconnect: setoresDesconectar.map((setorId) => ({
                          id: setorId
                        }))
                    }
                }
            });
        }catch (error) {
            throw new Error('Erro ao atualizar empresa');
        }
    }

    delete = async (id) => {
        try {
            return await prisma.empresa.delete({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.log(error);
            throw new Error('Erro ao deletar empresa');
        }
    }

    filter = async (filter) => {
        try {
            return await prisma.empresa.findMany({
                include: { empresa_setor: { include: { setor:true } }},
                
                where: {
                    OR: [
                        {
                            razao_social: {
                                contains: filter
                            },
                        },
                        {
                            nome_fantasia: {
                                contains: filter
                            },
                        },
                        {
                            cnpj: {
                                contains: filter
                            },
                        }
                    ]
                }
            });
        } catch (error) {
            throw new Error('Erro ao filtrar empresas');
        }
    }
}