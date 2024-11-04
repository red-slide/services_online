import dotenv from 'dotenv';
dotenv.config();

interface Env{
    PORT: number;
}

const env: Env = {
    PORT: Number(process.env.PORT) || 9080,
}

export default env;