// src/components/PokemonForm.jsx
import React, { useState } from 'react';

const PokemonForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input 
          type="text" 
          className="form-control bg-dark text-light border-light" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nombre del Pokémon" 
          required 
        />
        <button type="submit" className="btn btn-primary">Agregar</button>
      </div>
    </form>
  );
};

export default PokemonForm;
