const { Cliente } = require('../../models/cliente');

module.exports = {
  async store(req, res) {
    console.log(req.body); //debug
    const { nome, telefone, email, enderecoX, enderecoY } = req.body;
    try {
      const cliente = await Cliente.create({ nome, telefone, email, enderecoX, enderecoY });
      res.json(cliente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'não foi possível cadastrar.', details: error.message });
    }
  },

  async index(req, res) {
    try {
      const clientes = await Cliente.findAll();
      res.json(clientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Desculpe, houve um erro e não foi possível listar os clientes.' });
    }
  },

  async show(req, res) {
    const { id } = req.params;
    try {
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado.' });
      }
      res.json(cliente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Desculpe, houve um erro e não foi possível buscar o cliente.' });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, telefone, email, enderecoX, enderecoY } = req.body;
    try {
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado.' });
      }
      await cliente.update({ nome, telefone, email, enderecoX, enderecoY });
      res.json(cliente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Desculpe, houve um erro e não foi possível atualizar o cliente.' });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado.' });
      }
      await cliente.destroy();
      res.json({ message: 'Cliente removido com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Desculpe, não foi possível remover o cliente.' });
    }
  },

  async otimizarRotas(req, res) {
    // Implementação para otimizar rotas de atendimento
    // Lógica para calcular a rota otimizada e retornar a ordem de visitação dos clientes
  },
};