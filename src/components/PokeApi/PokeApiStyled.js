import styled from "styled-components";

export const PokeApiContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5rem;
    gap: 2rem;
    height: 100vh;
    background-color: #4a5f73;
`;

export const ContianerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 500px;
    border-radius: 15px;
    background-color: white;
    padding-bottom: 1rem;
`;


export const ContainerCardPokemon = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    margin-top: 5px;
    width: 100%;
    padding: 0 5px;
    overflow-y: scroll;
    height: 100%;
`;

export const PokemonShow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            object-fit: cover;
        }
        p {
            font-size: 2rem;
            color: #4a5f73;
        }
        p:nth-child(2) {
            font-weight: 800;
        }
    }
`;