const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./src/controllers/clienteRoutes');


const app = express();
const port = process.env.PORT || 5000;// Config do server

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api', clienteRoutes);

// Rotas
app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});