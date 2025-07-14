import express from 'express';
import { getAllRequest, submitRequest } from '../Controllers/requestController.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const requestRouter = express.Router();

requestRouter.post('/submit', submitRequest);
requestRouter.get('/all', getAllRequest);
requestRouter.post('/is-admin', isAdmin);

export default requestRouter;
