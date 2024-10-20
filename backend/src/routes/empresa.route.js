import { Router } from 'express';
import EmpresaController from '../controllers/empresa.controller.js';

const empresaController = new EmpresaController();
const routes = Router();

routes.get('/', empresaController.getAll);
routes.post('/', empresaController.create);
routes.get('/:id', empresaController.getById);
routes.put('/:id', empresaController.update);
routes.delete('/:id', empresaController.delete);
routes.post('/filter', empresaController.filter);

export default routes;