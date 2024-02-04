import React from 'react';
import { UilUsersAlt } from '@iconscout/react-unicons';


const ButtonRote = ({ onClick }) =>{
    return (
        <button onClick={onClick} className="button-route">
           Otimizar Rotas <UilUsersAlt size="22"/>
        </button>
    );
};
export default ButtonRote;