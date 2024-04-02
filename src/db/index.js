import {createPool} from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const con=createPool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    user:process.env.DB_USER,
    database:process.env.DB_NAME  
});

export default con;