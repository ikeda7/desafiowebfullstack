import SetorModel from '../models/setor.model.js';

const setorModel = new SetorModel();

export default class SetorController {
    create = async (req, res) => {
        try {
            const setor = req.body;
            const setorCadastrado = await setorModel.create(setor);
            res.status(201).json(setorCadastrado);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getAll = async (req, res) => {
        try {
            const setores = await setorModel.getAll();
            res.status(200).json(setores);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getById = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const setor = await setorModel.getById(id);
            res.status(200).json(setor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    update = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const setor = req.body;
            const setorAtualizado = await setorModel.update(id, setor);
            res.status(200).json(setorAtualizado);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    delete = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            await setorModel.delete(id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    filter = async (req, res) => {
        try {
            const { filter } = req.body;
            const setores = await setorModel.filter(filter);
            res.status(200).json(setores);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}