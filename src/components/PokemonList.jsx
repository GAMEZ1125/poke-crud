// src/components/PokemonList.jsx
import React from 'react';
import './PokemonList.css';

const PokemonList = ({ pokemons, onDelete }) => {
  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="pokemon-card">
          <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
            alt={pokemon.name} 
          />
          <h3>{pokemon.name}</h3>
          <button onClick={() => onDelete(pokemon.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
