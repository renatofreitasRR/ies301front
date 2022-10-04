import { InputContainer, Label } from './styles';

interface InputProps {
    title: string;
};


export function Input({ title }: InputProps) {
    return (
        <>
            <div>
                <Label>{title}</Label>
                <InputContainer />
            </div>
        </>
    )
}
