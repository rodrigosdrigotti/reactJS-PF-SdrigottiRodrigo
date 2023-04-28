import React from 'react';
import './ItemDetail.css';
import { useNavigate } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({ id, name, image, description, category, price, stock }) => {
  const navigate = useNavigate();

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades.`);
  }

  return (
    <div className='detail-container'>
        <div className='detail-img'>
            <img src={image} alt={name} />
        </div>
        <div className='detail-content'>
            <h1>{name}</h1>
            <div className='detail-content-info'>
              <p>Precio: ${price}</p>
              <p>Disponible: {stock}</p>
            </div>
            <p>Descripcion: {description}</p>
        </div>
        <div>
          <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
        <div className='detail-btn'>
          <button className='btn-opcion' onClick={() => navigate(-1)}>Go back</button>
        </div>
    </div>
  )
}
