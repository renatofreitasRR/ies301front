import styled, { css } from 'styled-components';

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

