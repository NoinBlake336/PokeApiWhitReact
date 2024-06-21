import axios from "axios";
import { useState } from "react";

export const useGetPokemons = () => {
    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemon = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
            const pokemonPromises = data.results.map(async (result) => {
                const pokemonData = await axios.get(result.url);
                return pokemonData.data;
            });

            const allPokemonData = await Promise.all(pokemonPromises);
            setPokemon(allPokemonData);
            setIsLoading(false);
            setIsError(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
        }
    };

    const getOnePokemon = async (id) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setSelectedPokemon(data);
            setIsLoading(false);
            setIsError(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
        }
    };


    const handlePokemonClick = (id) => {
        getOnePokemon(id);
    };

    return {pokemon, isLoading, isError, selectedPokemon, getPokemon, getOnePokemon, handlePokemonClick};
};