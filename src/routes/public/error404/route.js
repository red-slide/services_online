import { Router } from 'express';
import get404Page from '../../../controllers/getPages/public/get404Page.js';

const route = Router();
route.get('*', get404Page);

export default route;