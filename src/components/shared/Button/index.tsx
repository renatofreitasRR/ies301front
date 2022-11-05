import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer, ButtonVariant } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    variant?: ButtonVariant;
}


export function Button({ title, variant = 'primary', ...rest }: ButtonProps) {
    return (
        <ButtonContainer variant={variant} {...rest}>
            {title}
        </ButtonContainer>
    );
}