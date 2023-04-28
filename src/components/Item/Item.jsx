import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({ id, name, image, price, stock }) => {
  return (
    <section className='card'>
        <header className='card-title'>
            <h2>{name}</h2>
        </header>
        <picture>
            <img src={image} alt={name} className='card-img'/>
        </picture>
        <div className='card-info'>
            <p className='card-info-texto'>
                Precio: ${price}
            </p>
            <p className='card-info-texto'>
                Disponible: {stock}
            </p>
        </div>
        <footer className='card-footer'>
            <Link className='btn-opcion' to={`/detalle/${id}`}>Ver Detalle</Link>
        </footer>
    </section>
  )
}
