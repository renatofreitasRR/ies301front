import styled, { css } from 'styled-components';

export const SelectContainer = styled.select`
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

export const InputContent = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    svg{
        position: absolute;
        right: 16px;
        color: ${props => props.theme.colors.text};
    }
`;

export const Label = styled.label`
    font-weight: 700;
    font-size: ${props => props.theme.sizes.subTitle};

    color: ${props => props.theme.colors.subTitle};

    display: block;
    margin-bottom: 16px;
`;


export const Error = styled.span`
    font-weight: 700;
    font-size: 20px;

    color: ${props => props.theme.colors.error};

    display: block;
    margin-bottom: 16px;
`;

export const Content = styled.div`
    width: 100%;
`;