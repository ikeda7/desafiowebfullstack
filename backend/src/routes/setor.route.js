import { Router } from 'express';
import SetorController from '../controllers/setor.controller.js';

const setorController = new SetorController();
const routes = Router();

routes.get('/', setorController.getAll);
routes.post('/', setorController.create);
routes.get('/:id', setorController.getById);
routes.put('/:id', setorController.update);
routes.delete('/:id', setorController.delete);

export default routes;