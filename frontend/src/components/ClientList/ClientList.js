import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ButtonRote from '../ButtonRote/ButtonRote';
import ModalRote from '../ModalRote/ModalRote';

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [optimizedRoute, setOptimizedRoute] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [error, setError] = useState(null);
    const [newClient, setNewClient] = useState({
      nome: '',
      email: '',
      telefone: '',
      enderecoX: 0,
      enderecoY: 0,
    });

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('/api/api/clientes');
                console.log('Clientes:', response.data);
                setClients(response.data);
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
                setError('erro ao buscar clientes, veja o console');
            }
        };
        fetchClients();
    }, []);// Executa so uma vez no carregamento inicial

    const handleOptimizeRoute = async () => {
        try {
            const response = await axios.get('api/api/otimizar-rotas');
            console.log('Conteúdo do Modal:', response.data.ordemVisita);
            setOptimizedRoute(response.data.ordemVisita);
            setModalVisible(true);
        } catch (error) {
            console.error('Erro ao otimizar rotas:', error);
        }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewClient((prevClient) => ({
        ...prevClient,
        [name]: value,
      }));
    };
    const handleAddClient = async (e) => {
      e.preventDefault();

      // Vendo os campos obrigatórios
    if (!newClient.nome || !newClient.email || !newClient.telefone || !newClient.enderecoX || !newClient.enderecoX) {
      setError('Preencha todos os campos obrigatórios.');
      return;
    }
  
      try {
        const response = await axios.post('/api/api/clientes', newClient);
        setClients((prevClients) => [...prevClients, response.data]);
        setNewClient({
          nome: '',
          email: '',
          telefone: '',
          enderecoX: null,
          enderecoY: null,
        });
      } catch (error) {
        console.error('Erro ao adicionar cliente:', error);
        console.error('Erro, olhe o console.');
      }
    };


    return (
        <div>
          <h1>Lista de Clientes</h1>
          {error ? (
                <p>{error}</p>
            ) : (
          <ul>
            {clients && clients.map((client) => (
            <li key={client.id}>
            <strong>Nome:</strong> {client.nome} - <strong>Email:</strong> {client.email} - <strong>Telefone:</strong> {client.telefone}
            </li>
            ))}
          </ul>
            )}

          <ButtonRote onClick={handleOptimizeRoute} />

        <form onSubmit={handleAddClient}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={newClient.nome}
          onChange={handleInputChange}
        />

        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={newClient.email}
          onChange={handleInputChange}
        />

        <label>Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={newClient.telefone}
          onChange={handleInputChange}
        />

        <label>Endereço X:</label>
        <input
          type="number"
          name="enderecoX"
          value={newClient.enderecoX}
          onChange={handleInputChange}
        />

        <label>Endereço Y:</label>
        <input
          type="number"
          name="enderecoY"
          value={newClient.enderecoY}
          onChange={handleInputChange}
        />
        <button type="submit">Adicionar Cliente</button>
      </form>

          <ModalRote
          visible={modalVisible}
          route={optimizedRoute}
          onClose={() => setModalVisible(false)}
          /> 
        </div>
      );
    };
    
export default ClientList;