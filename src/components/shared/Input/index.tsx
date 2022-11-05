import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';
import { Register } from '../../../pages/Register';
import { InputContainer, Label, InputContent, Error, Content } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputName: string;
    title: string;
    hasLabel?: boolean;
    error?: string;
    Icon?: IconType;
    register: UseFormRegister<any>;
};


export function Input({ title, hasLabel = true, Icon, register, inputName, error, ...props }: InputProps) {
    return (
        <Content>
            {hasLabel && <Label>{title}</Label>}
            <InputContent>
                <InputContainer {...props} {...register(inputName)} />
                {Icon && <Icon size={20} />}
            </InputContent>
            <Error>{error}</Error>
        </Content>

    )
}
