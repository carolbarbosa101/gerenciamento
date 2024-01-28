const express = require('express');
const clienteController = require('./clienteController');

const router = express.Router();

//ROTAS PRA UM CRUD
router.post('/clientes', clienteController.store); //cadastrar um novo
router.get('/clientes', clienteController.index); // Listar todos os clientes
router.get('/clientes/:id', clienteController.show); // Exibir detalhes de um cliente
router.put('/clientes/:id', clienteController.update); // Atualizar informações de um cliente
router.delete('/clientes/:id', clienteController.destroy); // Remover um cliente

// Rota para otimizar rotas de atendimento
router.get('/otimizar-rotas', clienteController.otimizarRotas);

module.exports = router;