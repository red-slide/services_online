import { Request, Response } from "express";
import path from 'path'

class loginController{
    static renderLoginPage(req: Request, res: Response) {
        res.set({
            'Content-Type':'text/html',
            // Prevents the page from being cached in the browser or elsewhere, as
            // this login page may store users' personal information in the cache.
            'Cache-Control':'no-store, no-cache, must-revalidate, max-age=0',
            'Pragma':'no-cache'
        })
        .status(200)
        .sendFile(path.resolve('build/view/public/login/index.html'));
    };
}

export default loginController;