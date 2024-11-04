import { Router } from 'express';

import homeRoute from './public/home/route.js';
import loginRoute from './public/login/route.js';
import error404Route from './public/error404/route.js';

const routes = Router();

routes.use(homeRoute);
routes.use(loginRoute);
routes.use(error404Route);

export default routes;