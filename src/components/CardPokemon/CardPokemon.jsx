import React from 'react';
import { ContainerCard } from './CardPokemonStyled';

  const CardPokemon = ({ poke, onPokemonClick }) => {
    const handleClick = (e) => {
      const span = e.currentTarget.querySelector('span');
      const id = span ? span.textContent : null;
      if (id) {
        onPokemonClick(id);
      }
    };

  return (
    <ContainerCard onClick={handleClick}>
      <img src={poke.sprites.front_default} alt={poke.name} />
      <p>{poke.name}</p>
      <p>#<span>{poke.id}</span></p>
    </ContainerCard>
  );
};

export default CardPokemon;
