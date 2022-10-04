import styled, { css } from 'styled-components';

export const Container = styled.main`
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-template-areas: 'login splash';
    height: 100vh;

    @media screen and (max-width: 1092px){
        grid-template-columns: 50% 1fr;
        grid-template-areas: 'login splash';
    }

    @media screen and (max-width: 703px){
        grid-template-columns: 1fr;
        grid-template-areas: 'login';
    }
 
    height: 100%;
`;

export const LoginContainer = styled.section`
    grid-area: 'login';
    height: 100vh;
    padding: 58px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    h1{
        margin-bottom: 40px;
        text-align: center;
    }

    h2{
        margin-bottom: 90px;
        text-align: center;
    }

    div:last-child{
        input{
            margin-bottom: 16px;
        }

        button{
            margin-top: 40px;
        }
    }
`;

export const RegisterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 16px;

    small{
        font-size: 20px;
        color:  ${props => props.theme.colors.text};
    }

    a{
        font-size: 20px;
        color:  ${props => props.theme.colors.secondary};
        font-weight: 700;

        text-decoration: none;
    }
`;

export const SplashArt = styled.section`
    grid-area: 'splash';
    height: 100%;
    background-color: ${props => props.theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 75%;
        height: 75%;
    }

    @media screen and (max-width: 703px){
        display: none;
    }
`;