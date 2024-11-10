import { Router } from 'express';
import loginController from '../../controllers/services.controller.js';

const route: Router = Router();
route.get('/services', loginController.renderLoginPage);

export default route;