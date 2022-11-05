import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';
import { Register } from '../../../pages/Register';
import { TextAreaContainer, Label, TextAreaContent, Error, Content } from './styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    inputName: string;
    title: string;
    hasLabel?: boolean;
    error?: string;
    Icon?: IconType;
    register: UseFormRegister<any>;
};


export function TextArea({ title, hasLabel = true, Icon, register, inputName, error, ...props }: InputProps) {
    return (
        <Content>
            {hasLabel && <Label>{title}</Label>}
            <TextAreaContent>
                <TextAreaContainer {...props} {...register(inputName)} />
                {Icon && <Icon size={20} />}
            </TextAreaContent>
            <Error>{error}</Error>
        </Content>

    )
}
