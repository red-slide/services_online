import path from 'path';
import express, { Router } from 'express';

const staticFiles: Router = Router();

//global assets
staticFiles.use('/', express.static(path.resolve('build/view/assets/styles')));

staticFiles.use('/', express.static(path.resolve('build/view/assets/fonts')));

staticFiles.use('/', express.static(path.resolve('build/view/assets/imgs')));

export default staticFiles;