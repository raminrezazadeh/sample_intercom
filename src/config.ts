import dotenv from 'dotenv';

dotenv.config()
export const applicationConfigs = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
};
