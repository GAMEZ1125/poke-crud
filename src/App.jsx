// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonForm from './components/PokemonForm';
import PokemonList from './components/PokemonList';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
    const pokemonData = await Promise.all(
      response.data.results.map(async (pokemon, index) => {
        const detailResponse = await axios.get(pokemon.url);
        return {
          id: detailResponse.data.id,
          name: detailResponse.data.name,
          image: detailResponse.data.sprites.front_default,
        };
      })
    );
    setPokemons(pokemonData);
  };

  const handleAddPokemon = (pokemon) => {
    setPokemons([...pokemons, { ...pokemon, id: pokemons.length + 1, image: '' }]);
  };

  const handleDeletePokemon = (id) => {
    setPokemons(pokemons.filter((pokemon) => pokemon.id !== id));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>CRUD Pokémon</h1>
      <PokemonForm onSubmit={handleAddPokemon} />
      <PokemonList pokemons={pokemons} onDelete={handleDeletePokemon} />
    </div>
  );
};

export default App;
