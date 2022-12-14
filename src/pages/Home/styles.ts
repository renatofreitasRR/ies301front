import styled, { css } from 'styled-components';

export const Container = styled.main`

    section + section {
        margin-top: 32px;
    }
`;

export const ProductList = styled.section`
    display: flex;
    width: 100%;

    overflow-x: auto;
    white-space: nowrap;

    padding: 32px 16px;

    main + main {
        margin-left: 32px;
    }
`;

export const ListTitle = styled.h2`
    color: ${props => props.theme.colors.subTitle};
    font-size: ${props => props.theme.sizes.title};
    font-weight: 700;
    margin-left: 12px;
    margin-top: 24px;
`;

