import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import { Link, useNavigate } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({ id, name, image, description, category, price, stock }) => {
  const navigate = useNavigate();

  const [quantityAdded, setQuantityAdded] = useState(1);

  const { addItem } = useContext(CartContext);
  const [goToCart, setGoToCart] = useState(false)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    setGoToCart(true);
    const item = {
      id, name, image, price
    }
    addItem(item, quantity);
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
        <div className='detail-finish'>
          {
            goToCart ? <Link className='btn-finish' to="/cart">Terminar Compra</Link> : <ItemCount initial={quantityAdded} stock={stock} onAdd={handleOnAdd}/>
          }
        </div>
        <div className='detail-btn'>
          <button className='btn-opcion' onClick={() => navigate(-1)}>Go back</button>
        </div>
    </div>
  )
}
