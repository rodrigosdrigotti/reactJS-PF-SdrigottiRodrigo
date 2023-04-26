import React, { useState, useEffect } from 'react';
import './ItemCount.css';

export const ItemCount = ({ initial,stock, onAdd }) => {

    const [count, setCount] = useState(initial);

    const restar = () => {
        setCount(count - 1);
    }
    const sumar = () => {
        setCount(count + 1);
    }
    useEffect(() => {
      setCount(initial)
    }, [initial])
    
    return (
        <div className='contador'>
            <div className='controles'>
                <button className='btn' disabled={count <= 1} onClick={restar}>-</button>
                <h4>{count}</h4>
                <button className='btn' disabled={count >= stock} onClick={sumar}>+</button>
            </div>
            <div>
                <button className='btn-add' disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}
