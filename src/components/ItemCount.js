import React, { useState } from 'react';

const ItemCount = () => {

  const [contador, setContador] = 	useState(0);

	
  return (
    <div>
        <span>Contador : {contador}</span>
        <button primary onClick={ () =>  setContador(contador + 1)}>+</button>
        <button secondary onClick={ () => setContador(contador - 1)}>-</button>
    </div>
  )
}

export default ItemCount


