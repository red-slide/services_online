import express, {Application} from 'express';
import env from './config/env.js';
import router from './routes/router.js';
import httpSecurityHeaders from './config/httpSecurityHeaders.js';

function main(): void {
    const app: Application = express();
    
    app.use(httpSecurityHeaders)
    app.use(router);
    
    // start server
    app.listen(env.PORT ,(): void => {
        console.clear();
        console.log(`server is running on http://localhost:${env.PORT}/`);
    });
}

main()