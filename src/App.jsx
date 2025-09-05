import './App.css'
//import PokemonCard from './components/PokemonCard'
//import { useState } from 'react'
import React from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';

// npm create vite@latest nome_projeto -- --template react
// npm install
// npm run dev

function App() {
  return (
    <div className="app">
      <Header title="Pokédex" />
      <PokemonList />
    </div>
  );
}

export default App;
