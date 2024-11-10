import { Request, Response } from "express";
import path from 'path';

class homeController{
    static renderHomePage(req: Request, res: Response) {
        res.set({
            'Content-Type':'text/html',
            'Cache-Control':'no-cache',
            'Pragma':'no-cache',
            'Connection':'keep-alive',
            'Keep-Alive':'timeout=5'
        })
        .status(200)
        .sendFile(path.resolve('build/view/public/home/index.html'));
    };
}

export default homeController;