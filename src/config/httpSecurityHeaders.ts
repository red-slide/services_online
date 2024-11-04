import {Request, Response, NextFunction} from "express";

const headers = (req: Request, res: Response, next: NextFunction) => {

    // Add Headers.
    res.set({
        // Prevents the web site from being load on iframe tag html.
        'X-Frame-Options':'DENY', 
        // Prevents web browsers from interpreting files as a different content type.
        'X-Content-Type-Options':'nosniff'
    });

    // Remove Headers.
    [
        // Prevents technologies used on the server from being exposed.
        'X-Powered-By', 
    ].forEach(header => {res.removeHeader(header)});

    // Show Headers for debug.
    // console.log(JSON.stringify(res.getHeaders(), null, 2)); 
    next();
}

export default headers;
