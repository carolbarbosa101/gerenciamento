import React from 'react';


const ButtonClose = ({ onClick}) => {
    return(
        <button onClick={onClick} style={{ marginLeft: '10px'}}>
            Fechar
        </button>
    );
};

export default ButtonClose;