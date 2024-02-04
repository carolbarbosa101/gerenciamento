import React, { useState } from 'react';
import ClientList from './components/ClientList/ClientList';
import ButtonRote from './components/ButtonRote/ButtonRote';
import ModalRote from './components/ModalRote/ModalRote';

function App() {
  //aqui o estado q controla quando o modal abre e fecha
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //a funcao de abrir
  const openModal = () => {
    setModalIsOpen(true);
  };

  //a de fechar
  const closeModal = () => {
    setModalIsOpen(false);
  };


  return (
    <div className="App">
      <ClientList />
      <ButtonRote onClick={openModal} />
      <ModalRote isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default App;
