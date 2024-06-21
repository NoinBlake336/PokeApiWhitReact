import React, { useEffect } from 'react';
import { ContainerCardPokemon, ContianerCard, PokeApiContainer, PokemonShow } from './PokeApiStyled';
import NavBarPokeApi from '../NavBarPokeAPi/NavBarPokeApi';
import CardPokemon from '../CardPokemon/CardPokemon';

import { useGetPokemons } from '../../Customs/UseGetPokemons';

const PokeApi = () => {
    const {pokemon, isLoading, isError, selectedPokemon, getPokemon, handlePokemonClick } = useGetPokemons();



    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <PokeApiContainer>
            <ContianerCard>
                <NavBarPokeApi />
                <ContainerCardPokemon>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : isError ? (
                        <p>Error fetching data</p>
                    ) : (
                        pokemon.map((data) => (
                            <CardPokemon key={data.id} poke={data} onPokemonClick={() => handlePokemonClick(data.id)} />
                        ))
                    )}
                </ContainerCardPokemon>
            </ContianerCard>
            <ContianerCard>
                <PokemonShow>
                    {selectedPokemon ? (
                        <div>
                            <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
                            <p>{selectedPokemon.name}</p>
                            <p>#{selectedPokemon.id}</p>
                        </div>
                    ) : (
                        <p>Select a Pokémon to see details</p>
                    )}
                </PokemonShow>
            </ContianerCard>
        </PokeApiContainer>
    );
};

export default PokeApi;
