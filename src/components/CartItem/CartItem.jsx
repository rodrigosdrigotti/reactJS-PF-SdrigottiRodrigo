import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import './CartItem.css'

export const CartItem = ( { id, name, image, quantity, price } ) => {

    const { removeItem } = useContext(CartContext);

    return (
        <section className='cart'>
            <header className='cart-title'>
                <h2>{name}</h2>
            </header>
            <picture className='cart-img'>
                <img src={image} alt={name}/>
            </picture>
            <div className='cart-info'>
                <p className='cart-info-texto'>
                    Cantidad: {quantity}
                </p>
                <p className='cart-info-texto'>
                    Precio unitario: ${price}
                </p>
                <p className='cart-info-texto'>
                    Subtotal: ${quantity * price}
                </p>
            </div>
            <footer className='cart-footer'>
                <button className='btn-delete' onClick={ () => removeItem(id) }>X</button>
            </footer>
        </section>
    )
}
