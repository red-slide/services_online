import {Request, Response, NextFunction, Router} from "express";

const headers: Router = Router();

headers.use('*', (req: Request, res: Response, next: NextFunction) => {

    const headersToAdd: {[key: string]: string} = {
        // Prevents the web site from being load on iframe tag html.
        'X-Frame-Options':'DENY',
        // Prevents web browsers from interpreting files as a different content type.
        'X-Content-Type-Options':'nosniff'
    };
    Object.entries(headersToAdd).forEach(([key, value]) => {res.setHeader(key, value)});


    const headersToRemove: string[] = [
        // Prevents technologies used on the server from being exposed.
        'X-Powered-By'
    ]
    headersToRemove.forEach((value) => {res.removeHeader(value)})

    next();
})

export default headers;
