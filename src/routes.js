import { Router } from "express";
import { createTable, deletePessoa, insertPessoa, selectPessoa, selectPessoas, updatePessoa } from './Controler/Pessoa.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "api rodante"
    });
})

router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
router.post('/pessoa', insertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);

export default router;