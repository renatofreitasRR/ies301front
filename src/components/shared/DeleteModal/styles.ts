import styled, { css } from 'styled-components';

export const ContainerBackground = styled.main`
    background-color: rgba(0,0,0,0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    z-index: 100;

    overflow: hidden;

    position: fixed;
    top: 0;
    right: 0;
`;

export const Container = styled.main`
    background-color: ${props => props.theme.colors.white};

    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 300px;
    width: 570px;

    border-radius: 4px;

    position: relative;

    overflow: hidden;

    h1{
        text-align: center;
        margin-bottom: 16px;
    }

    h2{
        text-align: center;
    }

    svg{
        position: absolute;
        right: 16px;
        top: 16px;

        cursor: pointer;

        transition: 0.2s;

        :hover{
            transform: scale(1.2);
        }
    }

    div:last-child{
        margin-top: 32px;

        display: flex;
        width: 100%;

        button:last-child{
            margin-left: 32px;
            background-color: ${props => props.theme.colors.text};
        }
    }

`;


