import './App.css';
import React from 'react'
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos Profesores"}/>
    </React.Fragment>
    );
}

export default App;
