import styled, { css } from 'styled-components';

export const InputContainer = styled.input`
    height: ${props => props.theme.sizes.formComponentHeight};
    width: 100%;

    border: none;
    border-radius: ${props => props.theme.sizes.borderRadius};

    cursor: pointer;

    font-size: ${props => props.theme.sizes.subTitle};
    font-weight: 400;

    background-color: ${props => props.theme.colors.inputBackground};
    color: ${props => props.theme.colors.text};

    padding-left: 16px;

    :focus{
        outline-color: ${props => props.theme.colors.primary};
    }
    
    `;

export const Label = styled.label`
    font-weight: 700;
    font-size: ${props => props.theme.sizes.subTitle};

    color: ${props => props.theme.colors.subTitle};

    display: block;
    margin-bottom: 16px;
`;