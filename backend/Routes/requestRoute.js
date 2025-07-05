import express from 'express';
import { submitRequest } from '../Controllers/requestController.js';

const requestRouter = express.Router();

requestRouter.route('/submit', submitRequest);

export default requestRouter;
