'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clientes', [
      {
        nome: 'maria',
        telefone: '123456789',
        email: 'maria@example.com',
        enderecoX: 1,
        enderecoY: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'joao',
        telefone: '987654321',
        email: 'joao@example.com',
        enderecoX: 3,
        enderecoY: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clientes', null, {});
  },
};