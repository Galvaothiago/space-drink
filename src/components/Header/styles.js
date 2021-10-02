import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-5rem)
    }


    100% {
        transform: translateY(0);
        opacity: 1;
    }
`
export const Container = styled.header`
    width: 100%;
    height: 12rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background: rgba(0, 0, 0, .15);
    padding: .5rem 0 .5rem 0;

    animation: ${animate} 1s ease-in-out;

    
`

export const ContainerInput = styled.section`
    display: flex;
    flex-direction: column;

    span {
        font-size: 1.3rem;
    }
`