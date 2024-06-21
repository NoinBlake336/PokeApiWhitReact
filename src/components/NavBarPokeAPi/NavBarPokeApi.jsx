import React from 'react'
import { ContainerItems, ContainerLogo, Items, NavbarContainer } from './NavBarPokeApiStyled'
import { FaEgg } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
const NavBarPokeApi = () => {
  return (
    <NavbarContainer>
        <ContainerLogo>
            <img src="https://cdn.vectorstock.com/i/500p/74/05/pokemon-go-logo-icon-vector-23237405.jpg" alt="" />
            <p>Pokemon</p>
        </ContainerLogo>
        <ContainerItems>
            <Items>
                <FaRankingStar></FaRankingStar>
            </Items>
            <Items>
                <FaEgg></FaEgg>
            </Items>
            <Items>
                <FaSearch></FaSearch>
            </Items>
        </ContainerItems>
    </NavbarContainer>
  )
}

export default NavBarPokeApi