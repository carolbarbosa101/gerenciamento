const express = require('express');
const clienteController = require('../controllers/clienteController');
const { Cliente } = require('../models/cliente');
const rotaService = require('../services/rotaService');
const router = express.Router();

//ROTAS PRA UM CRUD
router.post('/clientes', clienteController.store); //cadastrar um novo
router.get('/clientes', clienteController.index); // Listar todos os clientes
router.get('/clientes/:id', clienteController.show); // Exibir detalhes de um cliente
router.put('/clientes/:id', clienteController.update); // Atualizar informações de um cliente
router.delete('/clientes/:id', clienteController.destroy); // Remover um cliente



// Rota para otimizar rotas de atendimento
router.get('/otimizar-rotas', async (req, res) => {
    try {
      const clientes = await Cliente.findAll(); // ou qualquer método que você usa para obter a lista de clientes
      const ordemVisita = rotaService.otimizarRotas(clientes);
      res.json(ordemVisita);

      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao otimizar as rotas.' });
    }
  });

module.exports = router;