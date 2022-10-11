import styled, { css } from 'styled-components';

export const Button = styled.button`
    height: ${props => props.theme.sizes.formComponentHeight};
    width: 100%;
    min-width: 250px;

    border: none;
    border-radius: ${props => props.theme.sizes.borderRadius};

    cursor: pointer;

    font-size: ${props => props.theme.sizes.subTitle};
    font-weight: 700;

    background-color: ${props => props.theme.colors.white};


    a{
        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;

        color: ${props => props.theme.colors.title};

        svg{
            color: #D9D9D9;
            margin-right: 16px;
        }
    }

`;


