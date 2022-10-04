import styled from 'styled-components';

export const Text = styled.p`
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.sizes.text};
    font-weight: 400;
`;
