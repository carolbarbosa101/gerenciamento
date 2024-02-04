const express = require('express');
const clienteRoutes = require('../src/controllers/clienteRoutes');

const app = express(); // eu criei uma instância do app express
//ou a porta ja definida ou a do servidor 
const port = process.env.PORT || 5000;

app.use(express.json()); // middleware pras requisições do JSON
app.use('/api', clienteRoutes);

app.listen(5000, () =>{
    console.log(`funcionando na porta ${5000}`);
});


module.exports = app;