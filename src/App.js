import './App.css';
import React from 'react'
import { NavBar } from './components/NavBar/NavBar';
import { Cart } from './components/Cart/Cart';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Checkout } from './components/Checkout/Checkout';
import { AuthProvider } from './context/AuthContext';
import { Signup } from './components/LoginSignUp/Signup';
import { Login } from './components/LoginSignUp/Login';
import { ForgotPassword } from './components/LoginSignUp/ForgotPassword';
import { ProtectedRoute } from './components/LoginSignUp/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route exact path='/' element={<ProtectedRoute/>}>
                <Route exact path='/' element={<ItemListContainer greeting={"Productos"}/>}/>
              </Route>
              <Route path='/signup' element={<Signup />}/> 
              <Route path='/login' element={<Login />}/> 
              <Route path='/forgot-password' element={<ForgotPassword />}/> 
              <Route path='/categoria/:categoryId' element={<ItemListContainer />}/>
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/> 
              <Route path='/checkout' element={<Checkout />}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
    );
}

export default App;
