
import React from 'react';
import Modal from 'react-modal'; // Importando o componente Modal do pacote react-modal
import { UilTimes } from '@iconscout/react-unicons'; 


// Função que representa o componente ModalRote
Modal.setAppElement('#root');

const ModalRote = ({ visible, route, onClose }) => {
  console.log(route);
  return (
    <Modal isOpen={visible}>
      <button onClick={onClose}>
        <UilTimes size="20" />
      </button>
      <h2>Rota Otimizada</h2>
      <ul>
      {Array.isArray(route) && route.map((client) => (
          <li key={client.id}>
          <strong>Nome:</strong> {client.nome} - <strong>Email:</strong> {client.email} - <strong>Telefone:</strong> {client.telefone}
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default ModalRote;