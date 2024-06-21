import styled from "styled-components";

export const NavbarContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid #999999ad;
`;


export const ContainerLogo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    img {
        width: 50px;
        padding-left: 5px;
    }
    p {
        color: #4a5f73;
        font-size: 1.3rem;
        font-weight: 600;
    }
`;


export const ContainerItems = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
`;


export const Items = styled.div`
    color: #4a5f73;
    font-size: 1.8rem;
    cursor: pointer;
`;