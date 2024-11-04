import { Request, Response } from "express";
import path from 'path'

class error404Controller{
    static renderError404Page(req: Request, res: Response) {
        res.set({
            'Content-Type':'text/html',
            'Cache-Control':'no-cache',
            'Pragma':'no-cache'
        })
        .status(200)
        .sendFile(path.resolve('src/view/public/error404/index.html'));
    };
}

export default error404Controller;