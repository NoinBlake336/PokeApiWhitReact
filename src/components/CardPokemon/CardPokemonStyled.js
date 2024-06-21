import styled from "styled-components";

export const ContainerCard = styled.button`
    width: 100px;
    max-height: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    background: white;
    align-items: center;
    img {
        height: 50%;
        object-fit: contain;
    }
    p {
        color: #4a5f73;
        font-size: 1.2rem;
        font-weight: 600;
    }
    p:nth-child(3){
        color: #65656596;
        font-size: 1.2rem;
        font-weight: 700;
    }

    &:hover{
        background: #4a5f73;
        border-radius: 10px;
        p {
            color: white;
        }
        p:nth-child(3){
            color: white;
            opacity: .9;
        }
    }
`; 