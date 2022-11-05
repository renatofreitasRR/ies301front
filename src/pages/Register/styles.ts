import styled, { css } from 'styled-components';

export const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr 50%;
    grid-template-areas: 'splash login ';
    height: 100vh;

    @media screen and (max-width: 1092px){
        grid-template-columns: 1fr 60%;
        grid-template-areas: 'splash login ';
    }

    @media screen and (max-width: 703px){
        grid-template-columns: 1fr;
        grid-template-areas: 'login';
    }
 
    height: 100%;
`;

export const RegisterContainer = styled.section`
    grid-area: 'login';
    height: 100vh;
    padding: 58px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Back = styled.a`
    a{
        width: 100px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        background-color: transparent;

        margin-bottom: 16px;
        color: ${props => props.theme.colors.secondary};

        font-size: ${props => props.theme.sizes.text};
        font-weight: 700;

        text-decoration: none;
    }

    svg{
        margin-right: 8px;
        width: 25px;
        height: 25px;
    }

    :hover{
        cursor: pointer;
    }
`;

export const Choises = styled.section`
`;

export const UserRegister = styled.section`

    button{
        margin-top: 48px;
    }
`;

export const CompanyRegister = styled.section`

    button{
        margin-top: 48px;
    }
`;

export const InputContainer = styled.section`
    display: flex;
    align-items: center;

    margin-top: 16px;

    div:first-child{
        margin-right: 16px;
    }


    @media screen and (max-width: 703px){
        flex-direction: column;

        div:first-child{
            margin-right: 0px;
        }
    }
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

`;

export const ButtonsContainer = styled.div`
    display: flex;
        flex-direction: column;
        align-items: center;

        small{
            font-size: 20px;
            font-weight: 700;

            margin: 24px 0;

            color:  ${props => props.theme.colors.text};
        }
`;

export const LoginContent = styled.div`
   

    a{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

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
        width: 80%;
        height: 80%;
    }

    @media screen and (max-width: 703px){
        display: none;
    }
`;