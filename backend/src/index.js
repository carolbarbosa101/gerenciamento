const express = require('express');
const clienteRoutes = require('../../routes/clienteRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', clienteRoutes);



app.listen(5000, () =>{
    console.log(`funcionando na porta ${5000}`);
});

//
//app.use(clienteRoutes);
module.exports = app;