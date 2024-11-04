import path from 'path';
import express, { Router } from 'express';

const staticFiles: Router = Router();

// Configura arquivos estáticos para serem servidos a partir de "/assets/public"
staticFiles.use('/public/assets', express.static(path.resolve('build/view/public/assets')));

export default staticFiles;