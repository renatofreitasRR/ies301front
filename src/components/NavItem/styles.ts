import styled, { css } from 'styled-components';

export const Item = styled.div`
    height: ${props => props.theme.sizes.formComponentHeight};
    width: 100%;

    cursor: pointer;

    font-size: ${props => props.theme.sizes.subTitle};
    font-weight: 700;

    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        text-align: center;


        color: ${props => props.theme.colors.white};

        svg{
            color: ${props => props.theme.colors.secondary};
            margin-bottom: 16px;
        }
    }

`;


