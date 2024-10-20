import EmpresaModel from '../models/empresa.model.js';

const empresaModel = new EmpresaModel();

export default class EmpresaController {
    create = async (req, res) => {
        try {
            const empresa = req.body;
            const empresaCadastrada = await empresaModel.create(empresa);
            res.status(201).json(empresaCadastrada);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }


    getAll = async (req, res) => {
        try {
            const empresas = await empresaModel.getAll();
            res.status(200).json(empresas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getById = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const empresa = await empresaModel.getById(id);
            res.status(200).json(empresa);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    update = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const empresa = req.body;
            const empresaAtualizada = await empresaModel.update(id, empresa);
            res.status(200).json(empresaAtualizada);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            await empresaModel.delete(id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}