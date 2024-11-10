import { Router } from 'express';

import landingRoute from './public/home.route.js';
import loginRoute from './public/services.route.js';
import error404Route from './public/error404.route.js';

const router: Router = Router();

router.use(landingRoute);
router.use(loginRoute);
router.use(error404Route);

export default router;