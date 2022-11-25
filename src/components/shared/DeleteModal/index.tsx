import { AiOutlineClose } from "react-icons/ai";
import { SubTitle } from "../../../styles/subTitle";
import { Title } from "../../../styles/title";
import { Button } from "../Button";
import { Container, ContainerBackground } from "./styles";

interface DeleteModalProps {
    title: string;
    text: string;
    isOpen: boolean;
    action: () => Promise<void>;
    close: () => void;
}

export function DeleteModal({ title, text, isOpen, action, close }: DeleteModalProps) {
    
    async function executeAction(){
        await action().then(() => {
            close();
        })
    }
    
    return (
        <ContainerBackground>
            <Container>
                <AiOutlineClose size={25} onClick={close} />
                <div>
                    <Title>{title}</Title>
                    <SubTitle>{text}</SubTitle>
                </div>
                <div>
                    <Button title='Deletar' onClick={executeAction} />
                    <Button title='Cancelar' onClick={close} />
                </div>
            </Container>
        </ContainerBackground>
    )
}