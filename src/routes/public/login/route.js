import { Router } from 'express';
import getLoginPage from '../../../controllers/getPages/public/getLoginPage.js';

const route = Router();
route.get('/login', getLoginPage);

export default route;