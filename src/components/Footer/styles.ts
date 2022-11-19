import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
    margin-top: 32px;

    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 10%;

    background-color: ${props => props.theme.colors.secondary};

    position: fixed;
    bottom: 0;

    width: 100%;

    strong{
        color: ${props => props.theme.colors.white};
        font-size: ${props => props.theme.sizes.text};
    }
`;

