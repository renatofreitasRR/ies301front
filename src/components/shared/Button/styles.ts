import styled, { css } from 'styled-components';
import { defaultTheme } from '../../../styles/themes/default';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'error';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: defaultTheme.colors.primary,
    secondary: defaultTheme.colors.secondary,
    error: defaultTheme.colors.error,
    success: defaultTheme.colors.success
}

const buttonTextColorVariants = {
    primary: defaultTheme.colors.white,
    secondary: defaultTheme.colors.title,
    error: defaultTheme.colors.title,
    success: defaultTheme.colors.white
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    height: ${props => props.theme.sizes.formComponentHeight};
    width: 100%;

    border: none;
    border-radius: ${props => props.theme.sizes.borderRadius};

    cursor: pointer;

    font-size: ${props => props.theme.sizes.subTitle};
    font-weight: 700;

    ${props => {
        return css`
            background-color: ${buttonVariants[props.variant]};
            color: ${buttonTextColorVariants[props.variant]};
        `
    }};
`;