import express from 'express';
require('dotenv').config();
//importações
import cors from 'cors';
import routes from './routes';
import path from 'path';

const port = process.env.port;

//inicializando express
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

//rota estática de para armazenar uploads
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(port);