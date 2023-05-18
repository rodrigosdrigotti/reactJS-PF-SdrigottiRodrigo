import React, { createContext, useState } from 'react';
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            setCart(cart.map(prod => {
                return prod.id === item.id ? {...prod, quantity: prod.quantity + quantity} : prod;
            }));
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProduct = () => {
        return cart.reduce((acumulador, prodActual) => acumulador + prodActual.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice, totalProduct }}>
            { children }
        </CartContext.Provider>
    )
}
