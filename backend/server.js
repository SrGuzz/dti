const express = require('express');
const {validaDados} = require("./validaDados");
const {calcularPreco} = require("./calcularPreco");
const cors = require('cors')

const app = express();
const port = 8789;

app.use(express.json());
app.use(cors());

app.post('*', cors());

app.post('/api/calcula-petshop', (req, res) => {
    // req.body;
    const { cachorrosGrandes, cachorrosPequenos, date } = req.body;

    if (validaDados(cachorrosGrandes, cachorrosPequenos, date) === false) {
        return res.status(422).json({error: 'Dados inválidos!'});
    }

    const objetoRetorno = calcularPreco(cachorrosGrandes, cachorrosPequenos, date);

    res.json(objetoRetorno);
});

app.listen(port, () => {
    console.log(`Exemplo app node rodando no endereço http://localhost:${port}`)
});

