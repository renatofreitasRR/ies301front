import { IconType } from 'react-icons';
import { InputContainer, Label, InputContent } from './styles';

interface InputProps {
    title: string;
    hasLabel?: boolean;
    Icon?: IconType;
};


export function Input({ title, hasLabel = true, Icon, ...rest }: InputProps) {
    return (
        <>
            <div>
                {hasLabel && <Label>{title}</Label>}
                <InputContent>
                    <InputContainer {...rest} />
                    {Icon && <Icon size={20} />}
                </InputContent>
            </div>
        </>
    )
}
