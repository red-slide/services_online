import { Router } from 'express';
import loginController from '../../controllers/login.controller.js';

const route: Router = Router();
route.get('/login', loginController.renderLoginPage);

export default route;