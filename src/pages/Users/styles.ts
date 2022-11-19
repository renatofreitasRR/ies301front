import styled, { css } from 'styled-components';

export const Container = styled.main`

    section + section {
        margin-top: 32px;
    }
`;

export const ProductList = styled.section`
    width: 100%;

    padding: 32px 16px;
`;

export const ListTitle = styled.h2`
    color: ${props => props.theme.colors.subTitle};
    font-size: ${props => props.theme.sizes.title};
    font-weight: 700;
    margin-left: 12px;
`;

export const BackHome = styled.div`
    color: ${props => props.theme.colors.secondary};
    font-weight: 700;
    margin-bottom: 24px;

    a{
        color: ${props => props.theme.colors.secondary};
        display: flex;
        align-items: center;

        text-decoration: none;
    }

    span{
        color: ${props => props.theme.colors.secondary};
        font-size: ${props => props.theme.sizes.subTitle};
        margin-left: 8px;
    }
`;

export const RegisterProductsButton = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    
    width: 100px;
    height: 100px;
    border-radius: 50%;

    position: absolute;

    bottom: 64px;
    right: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition:  0.2s;

    :hover{
        transform: scale(1.1);
    }
`;

