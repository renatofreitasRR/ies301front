import { ButtonContainer, ButtonVariant } from './styles';

interface ButtonProps {
    title: string;
    variant?: ButtonVariant;
}


export function Button({ title, variant = 'primary' }: ButtonProps) {
    return (
        <ButtonContainer variant={variant}>
            {title}
        </ButtonContainer>
    );
}