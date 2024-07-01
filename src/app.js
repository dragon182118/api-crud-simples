//import { openDb } from './configDB.js';
//import { createTable, deletePessoa, insertPessoa, selectPessoa, selectPessoas, updatePessoa } from './Controler/Pessoa.js';

import express from 'express';
const app = express();
app.use(express.json());

import router from './routes.js';
app.use(router);

app.listen(3000, () => console.log('API rodando...'));