import { Router } from 'express';
import getHomePage from '../../../controllers/getPages/public/getHomePage.js';

const route = Router();
route.get('/', getHomePage);

export default route;