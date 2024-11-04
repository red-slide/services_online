import dotenv from 'dotenv';
dotenv.config();

const env = {
    PORT: process.env.PORT || 9687,
}

export default env;