import { Router } from 'express';
import homeController from '../../controllers/home.controller.js';

const route: Router = Router();
route.get('/', homeController.renderHomePage);

export default route;