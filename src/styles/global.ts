import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        line-height: 30px;
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    body{
        background-color: ${props => props.theme.colors.white};
        height: 100vh;
        width: 100vw;
    }

    ::-webkit-scrollbar {
        width: 11px;
        height: 11px;
    }
    ::-webkit-scrollbar-button {
        width: 10px;
        height: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #cd113b;
        border: 0px none #ffffff;
        border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #cd113b;
    }
    ::-webkit-scrollbar-thumb:active {
        background: #cd113b;
    }
    ::-webkit-scrollbar-track {
        background: #ff8d29;
        border: 0px none #ffffff;
        border-radius: 8px;
    }
    ::-webkit-scrollbar-track:hover {
        background: #ff8d29;
    }
    ::-webkit-scrollbar-track:active {
        background: #ff8d29;
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }
`;