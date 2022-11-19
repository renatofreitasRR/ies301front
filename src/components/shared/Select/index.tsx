import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';
import { Register } from '../../../pages/Register';
import { SelectContainer, Label, InputContent, Error, Content } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    inputName: string;
    title: string;
    hasLabel?: boolean;
    error?: string;
    Icon?: IconType;
    register: UseFormRegister<any>;
    options: ReactNode;
};


export function Select({ options, title, hasLabel = true, Icon, register, inputName, error, ...props }: SelectProps) {
    return (
        <Content>
            {hasLabel && <Label>{title}</Label>}
            <InputContent>
                <SelectContainer {...props} {...register(inputName)}>
                    {options}
                </SelectContainer>
                {Icon && <Icon size={20} />}
            </InputContent>
            <Error>{error}</Error>
        </Content>

    )
}
