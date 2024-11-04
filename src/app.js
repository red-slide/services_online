import express from 'express';
import env from './config/env.js';
import routes from './routes/routes.js';

function main(){
    const app = express();
    
    app.use(routes);
    
    // start server
    app.listen(env.PORT ,() => {
        console.clear();
        console.log(`server is on http://localhost:${env.PORT}`);
    });
}

main()