import { Router } from 'express';
import error404Controller from '../../controllers/error404.controller.js';

const route: Router = Router();
route.get('*', error404Controller.renderError404Page);

export default route;