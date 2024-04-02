import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mainRouting from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
mainRouting(app);
dotenv.config();

app.listen(process.env.port, ()=>{
    console.log(`CONNECTION SUCCEED ${process.env.PORT}`)
});
