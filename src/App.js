import './App.css';
import React from 'react'
import { NavBar } from './components/NavBar/NavBar';
import { Cart } from './components/Cart/Cart';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Checkout } from './components/Checkout/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Productos"}/>}/>
            <Route path='/categoria/:categoryId' element={<ItemListContainer />}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/> 
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
    );
}

export default App;
