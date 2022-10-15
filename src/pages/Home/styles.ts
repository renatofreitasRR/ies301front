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

